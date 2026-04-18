import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function ensureAdmin() {
    const email = process.env.ADMIN_USERNAME || 'chhattisgarhshadi@gmail.com';
    const password = process.env.ADMIN_PASSWORD || 'Chhattisgarh@25';
    
    console.log(`Checking for admin: ${email}`);

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const admin = await prisma.admin.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                isActive: true,
                role: 'SUPER_ADMIN'
            },
            create: {
                email,
                password: hashedPassword,
                firstName: 'Appnity',
                lastName: 'Admin',
                role: 'SUPER_ADMIN',
                isActive: true
            }
        });

        console.log(`✅ Admin ${admin.email} is ready!`);
    } catch (error) {
        console.error('❌ Error ensuring admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

ensureAdmin();
