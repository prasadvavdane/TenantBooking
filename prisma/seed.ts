import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash("Password@123", 10);

  const owner = await prisma.user.upsert({
    where: { email: "owner@tenantbooking.com" },
    update: {},
    create: {
      name: "Sample Owner",
      email: "owner@tenantbooking.com",
      role: UserRole.OWNER,
      passwordHash: hash,
      profile: { create: { city: "Bengaluru", kycStatus: "VERIFIED" } }
    }
  });

  await prisma.user.upsert({
    where: { email: "tenant@tenantbooking.com" },
    update: {},
    create: {
      name: "Sample Tenant",
      email: "tenant@tenantbooking.com",
      role: UserRole.TENANT,
      passwordHash: hash,
      profile: { create: { city: "Bengaluru" } }
    }
  });

  await prisma.property.create({
    data: {
      ownerId: owner.id,
      title: "Modern 2BHK near Metro",
      description: "Fully furnished flat with 24x7 security and gym.",
      propertyType: "APARTMENT",
      furnishedType: "FULLY_FURNISHED",
      bhkType: "TWO_BHK",
      rent: 38000,
      deposit: 120000,
      availableFrom: new Date(),
      city: "Bengaluru",
      area: "Indiranagar",
      pincode: "560038",
      status: "AVAILABLE"
    }
  });
}

main().finally(async () => prisma.$disconnect());
