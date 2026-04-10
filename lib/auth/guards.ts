import { auth } from "@/auth";

export async function requireRole(roles: string[]) {
  const session = await auth();
  if (!session?.user || !roles.includes(session.user.role ?? "")) {
    throw new Error("Forbidden");
  }
  return session;
}
