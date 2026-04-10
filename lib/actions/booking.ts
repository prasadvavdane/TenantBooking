"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function createBooking(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Unauthorized");

  const propertyId = formData.get("propertyId") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const slotStart = new Date(`${date}T${time}:00`);
  const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000);

  const conflict = await prisma.booking.findFirst({
    where: {
      propertyId,
      status: { in: ["PENDING", "CONFIRMED"] },
      OR: [{ slotStart: { lte: slotStart }, slotEnd: { gt: slotStart } }, { slotStart: { lt: slotEnd }, slotEnd: { gte: slotEnd } }]
    }
  });

  if (conflict) return { message: "Selected slot already booked" };

  await prisma.booking.create({
    data: {
      propertyId,
      tenantId: session.user.id,
      slotStart,
      slotEnd,
      status: "PENDING"
    }
  });

  return { message: "Visit scheduled" };
}
