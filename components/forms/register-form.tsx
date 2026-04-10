"use client";

import { useState } from "react";
import { registerUser } from "@/lib/actions/auth";

export function RegisterForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="space-y-3 rounded-xl border bg-white p-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const result = await registerUser(form);
        setMessage(result.message);
      }}
    >
      <input name="name" placeholder="Full name" className="w-full rounded border px-3 py-2" required />
      <input name="email" type="email" placeholder="Email" className="w-full rounded border px-3 py-2" required />
      <input name="password" type="password" placeholder="Password" className="w-full rounded border px-3 py-2" required />
      <select name="role" className="w-full rounded border px-3 py-2">
        <option value="TENANT">Tenant</option>
        <option value="OWNER">Owner</option>
      </select>
      <button className="w-full rounded bg-brand-500 py-2 text-white">Create account</button>
      {message && <p className="text-sm">{message}</p>}
    </form>
  );
}
