"use client";

import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="sticky top-2 flex gap-2 rounded-xl bg-white p-2 text-slate-900 shadow">
      <input
        className="w-full rounded-lg border px-3 py-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city, area, or pincode"
      />
      <button className="rounded-lg bg-brand-500 px-4 py-2 text-white" type="submit">
        Search
      </button>
    </form>
  );
}
