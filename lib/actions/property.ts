"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { createPropertySchema } from "@/lib/validators/property";

export async function createProperty(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized");

  const parsed = createPropertySchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    area: formData.get("area"),
    pincode: formData.get("pincode"),
    rent: formData.get("rent"),
    deposit: formData.get("deposit"),
    bhkType: formData.get("bhkType"),
    propertyType: formData.get("propertyType"),
    furnishedType: formData.get("furnishedType"),
    availableFrom: formData.get("availableFrom")
  });

  if (!parsed.success) return { message: "Invalid property data" };

  await prisma.property.create({
    data: {
      ...parsed.data,
      ownerId: session.user.id as string,
      status: "AVAILABLE"
    }
  });

  return { message: "Property listed successfully" };
}
