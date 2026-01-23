import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import prisma from '../config/database.js';
import { isRedisConnected, getRedisClient } from '../config/redis.js';
import { isR2Configured, r2Client, getBucketName } from '../config/r2.js';
import { getFirebaseApp } from '../config/firebase.js';
import { isRazorpayConfigured, razorpayInstance } from '../config/razorpay.js';
import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { logger } from '../config/logger.js';
import fs from 'fs';
import path from 'path';

/**
 * Perform a deep system diagnostic check on all connections and environment variables.
 */
export const runDiagnostics = asyncHandler(async (req, res) => {
    const results = {
        env: { status: 'pending', details: {} },
        database: { status: 'pending', latency: null },
        redis: { status: 'pending' },
        storage: { status: 'pending', provider: 'Cloudflare R2' },
        firebase: { status: 'pending' },
        razorpay: { status: 'pending' },
        system: {
            platform: process.platform,
            nodeVersion: process.version,
            memoryUsage: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
            uptime: `${Math.floor(process.uptime())}s`
        }
    };

    // 1. Environment Variable Check (compare with .env.example)
    try {
        const examplePath = path.resolve(process.cwd(), '.env.example');
        if (fs.existsSync(examplePath)) {
            const exampleContent = fs.readFileSync(examplePath, 'utf8');
            const requiredVars = exampleContent
                .split('\n')
                .filter(line => line.includes('=') && !line.startsWith('#'))
                .map(line => line.split('=')[0].trim());

            const missingVars = requiredVars.filter(v => !process.env[v]);
            results.env.status = missingVars.length === 0 ? '✅ Success' : '⚠️ Partial';
            results.env.details = {
                totalRequired: requiredVars.length,
                missing: missingVars,
                configured: requiredVars.length - missingVars.length
            };
        } else {
            results.env.status = '❓ .env.example not found';
        }
    } catch (err) {
        results.env.status = '❌ Error';
        results.env.error = err.message;
    }

    // 2. Database Connection Test
    try {
        const start = Date.now();
        await prisma.$queryRaw`SELECT 1`;
        results.database.latency = `${Date.now() - start}ms`;
        results.database.status = '✅ Connected';
    } catch (err) {
        results.database.status = '❌ Failed';
        results.database.error = err.message;
    }

    // 3. Redis Connection Test
    try {
        if (isRedisConnected()) {
            const client = getRedisClient();
            await client.ping();
            results.redis.status = '✅ Connected';
        } else {
            results.redis.status = '⚠️ Not Connected';
        }
    } catch (err) {
        results.redis.status = '❌ Failed';
        results.redis.error = err.message;
    }

    // 4. Cloudflare R2 Connection Test
    try {
        if (isR2Configured()) {
            const command = new ListObjectsV2Command({
                Bucket: getBucketName(),
                MaxKeys: 1
            });
            await r2Client.send(command);
            results.storage.status = '✅ Connected & Bucket Accessible';
        } else {
            results.storage.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.storage.status = '❌ Connection Failed';
        results.storage.error = err.message;
    }

    // 5. Firebase Admin SDK Test
    try {
        const app = getFirebaseApp();
        if (app) {
            results.firebase.status = '✅ Initialized';
            results.firebase.projectName = app.options.credential?.projectId || 'Configured';
        } else {
            results.firebase.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.firebase.status = '❌ Initialization Failed';
        results.firebase.error = err.message;
    }

    // 6. Razorpay Test
    try {
        if (isRazorpayConfigured()) {
            // Fetching plans is a good way to verify keys without creating data
            await razorpayInstance.plans.all({ count: 1 });
            results.razorpay.status = '✅ Connected & Keys Verified';
        } else {
            results.razorpay.status = '⚠️ Not Configured';
        }
    } catch (err) {
        results.razorpay.status = '❌ Key Verification Failed';
        results.razorpay.error = err.message;
    }

    logger.info('System diagnostics completed');

    res.status(200).json(
        new ApiResponse(200, results, 'System diagnostics completed successfully')
    );
});
