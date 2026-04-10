import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "Integrate signed URL upload via Cloudinary or S3 in production"
  });
}
