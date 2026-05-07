import prisma from '../src/config/database.js';

async function count() {
    try {
        const totalUsers = await prisma.user.count();
        const totalProfiles = await prisma.profile.count();
        const publishedProfiles = await prisma.profile.count({ where: { isPublished: true } });
        const draftProfiles = await prisma.profile.count({ where: { isPublished: false } });
        const males = await prisma.profile.count({ where: { gender: 'MALE' } });
        const females = await prisma.profile.count({ where: { gender: 'FEMALE' } });
        const publishedMales = await prisma.profile.count({ where: { gender: 'MALE', isPublished: true } });
        const publishedFemales = await prisma.profile.count({ where: { gender: 'FEMALE', isPublished: true } });

        console.log(`Total Users: ${totalUsers}`);
        console.log(`Total Profiles: ${totalProfiles}`);
        console.log(`Published Profiles: ${publishedProfiles}`);
        console.log(`Draft Profiles: ${draftProfiles}`);
        console.log(`Total Males: ${males}`);
        console.log(`Total Females: ${females}`);
        console.log(`Published Males: ${publishedMales}`);
        console.log(`Published Females: ${publishedFemales}`);
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

count();
