import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.property.findMany({ take: 20, orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}
