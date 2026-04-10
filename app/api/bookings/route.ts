import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.booking.findMany({ include: { property: true, tenant: true } });
  return NextResponse.json(data);
}
