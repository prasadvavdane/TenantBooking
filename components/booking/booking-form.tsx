"use client";

import { useTransition } from "react";
import { createBooking } from "@/lib/actions/booking";

export function BookingForm({ propertyId }: { propertyId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="mt-3 space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        form.append("propertyId", propertyId);
        startTransition(async () => {
          await createBooking(form);
        });
      }}
    >
      <input className="w-full rounded-lg border px-3 py-2" type="date" name="date" required />
      <input className="w-full rounded-lg border px-3 py-2" type="time" name="time" required />
      <button className="w-full rounded-lg bg-brand-500 py-2 text-white" disabled={isPending}>
        {isPending ? "Scheduling..." : "Confirm visit"}
      </button>
    </form>
  );
}
