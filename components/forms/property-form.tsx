"use client";

import { useTransition } from "react";
import { createProperty } from "@/lib/actions/property";

export function PropertyForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        startTransition(async () => {
          await createProperty(form);
        });
      }}
    >
      <input name="title" className="rounded border px-3 py-2" placeholder="Title" required />
      <input name="city" className="rounded border px-3 py-2" placeholder="City" required />
      <input name="area" className="rounded border px-3 py-2" placeholder="Area" required />
      <input name="pincode" className="rounded border px-3 py-2" placeholder="Pincode" required />
      <textarea name="description" className="rounded border px-3 py-2 md:col-span-2" placeholder="Description" required />
      <input name="rent" type="number" className="rounded border px-3 py-2" placeholder="Rent" required />
      <input name="deposit" type="number" className="rounded border px-3 py-2" placeholder="Deposit" required />
      <select name="propertyType" className="rounded border px-3 py-2">
        <option value="FLAT">Flat</option><option value="APARTMENT">Apartment</option><option value="VILLA">Villa</option><option value="PG">PG</option><option value="COMMERCIAL_OFFICE">Commercial office</option><option value="SHOP">Shop</option>
      </select>
      <select name="bhkType" className="rounded border px-3 py-2">
        <option value="RK">RK</option><option value="ONE_BHK">1 BHK</option><option value="TWO_BHK">2 BHK</option><option value="THREE_BHK">3 BHK</option><option value="FOUR_PLUS">4+ BHK</option>
      </select>
      <select name="furnishedType" className="rounded border px-3 py-2">
        <option value="UNFURNISHED">Unfurnished</option><option value="SEMI_FURNISHED">Semi-furnished</option><option value="FULLY_FURNISHED">Fully furnished</option>
      </select>
      <input name="availableFrom" type="date" className="rounded border px-3 py-2" required />
      <button className="rounded bg-brand-500 py-2 text-white md:col-span-2" disabled={isPending}>
        {isPending ? "Saving..." : "Create listing"}
      </button>
    </form>
  );
}
