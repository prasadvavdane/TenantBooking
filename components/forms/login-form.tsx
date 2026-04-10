"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function LoginForm() {
  const [error, setError] = useState("");

  return (
    <form
      className="space-y-3 rounded-xl border bg-white p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email") as string;
        const password = form.get("password") as string;
        const result = await signIn("credentials", { email, password, redirect: false });
        if (result?.error) setError("Invalid credentials");
      }}
    >
      <input name="email" type="email" placeholder="Email" className="w-full rounded border px-3 py-2" required />
      <input name="password" type="password" placeholder="Password" className="w-full rounded border px-3 py-2" required />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button className="w-full rounded bg-brand-500 py-2 text-white">Sign in</button>
      <button type="button" onClick={() => signIn("google")} className="w-full rounded border py-2">Continue with Google</button>
    </form>
  );
}
