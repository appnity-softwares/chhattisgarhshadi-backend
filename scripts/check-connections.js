import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import admin from 'firebase-admin';
import Razorpay from 'razorpay';
import fs from 'fs';
import path from 'path';

dotenv.config();

const prisma = new PrismaClient();

async function checkConnections() {
    console.log('🚀 Starting System Connection Check...\n');

    // 1. Env Check
    console.log('📋 Checking Environment Variables...');
    const examplePath = path.resolve(process.cwd(), '.env.example');
    if (fs.existsSync(examplePath)) {
        const exampleContent = fs.readFileSync(examplePath, 'utf8');
        const requiredVars = exampleContent
            .split('\n')
            .filter(line => line.includes('=') && !line.startsWith('#'))
            .map(line => line.split('=')[0].trim());

        const missing = requiredVars.filter(v => !process.env[v]);
        if (missing.length === 0) {
            console.log('✅ All required .env variables are present.\n');
        } else {
            console.log(`⚠️  Missing variables: ${missing.join(', ')}\n`);
        }
    }

    // 2. Database
    try {
        process.stdout.write('🐘 Testing PostgreSQL (Prisma)... ');
        await prisma.$queryRaw`SELECT 1`;
        console.log('✅ Connected\n');
    } catch (err) {
        console.log(`❌ Failed: ${err.message || 'Unknown error'}\n`);
    }

    // 3. Redis
    if (process.env.REDIS_URL) {
        try {
            process.stdout.write('🔴 Testing Redis... ');
            const redis = new Redis(process.env.REDIS_URL);
            await redis.ping();
            console.log('✅ Connected\n');
            await redis.quit();
        } catch (err) {
            console.log(`❌ Failed: ${err.message || 'Unknown error'}\n`);
        }
    }

    // 4. Cloudflare R2
    if (process.env.R2_ACCESS_KEY_ID) {
        try {
            process.stdout.write('☁️  Testing Cloudflare R2... ');
            const r2 = new S3Client({
                region: process.env.R2_REGION || 'auto',
                endpoint: process.env.R2_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.R2_ACCESS_KEY_ID,
                    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
                },
            });
            const command = new ListObjectsV2Command({
                Bucket: process.env.R2_BUCKET_NAME,
                MaxKeys: 1
            });
            await r2.send(command);
            console.log('✅ Connected & Bucket Accessible\n');
        } catch (err) {
            console.log(`❌ Failed: ${err.message || 'Unknown error'}\n`);
        }
    }

    // 5. Firebase
    if (process.env.FIREBASE_PROJECT_ID) {
        try {
            process.stdout.write('🔥 Testing Firebase Admin... ');
            if (!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert({
                        projectId: process.env.FIREBASE_PROJECT_ID,
                        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    }),
                });
            }
            console.log('✅ Initialized\n');
        } catch (err) {
            console.log(`❌ Failed: ${err.message || 'Unknown error'}\n`);
        }
    }

    // 6. Razorpay
    if (process.env.RAZORPAY_KEY_ID) {
        try {
            process.stdout.write('💳 Testing Razorpay... ');
            const rzp = new Razorpay({
                key_id: process.env.RAZORPAY_KEY_ID,
                key_secret: process.env.RAZORPAY_KEY_SECRET,
            });
            await rzp.plans.all({ count: 1 });
            console.log('✅ Keys Verified\n');
        } catch (err) {
            console.log(`❌ Failed: ${err.message || 'Unknown error'}\n`);
        }
    }

    console.log('🏁 System Check Finished.');
    await prisma.$disconnect();
}

checkConnections();
