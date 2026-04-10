import { NextResponse } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/admin", "/owner", "/tenant"];

export default auth((req) => {
  const isProtected = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));
  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/owner/:path*", "/tenant/:path*"]
};
