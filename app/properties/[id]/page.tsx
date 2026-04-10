import { BookingForm } from "@/components/booking/booking-form";

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 p-4 md:grid-cols-[2fr_1fr] md:p-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Property #{params.id}</h1>
        <p className="text-slate-600 dark:text-slate-300">Premium listing with virtual tour, amenities, and nearby schools/hospitals.</p>
        <div className="rounded-2xl border p-4">
          <h2 className="font-semibold">Rent breakdown</h2>
          <ul className="mt-2 text-sm">
            <li>Monthly rent: ₹35,000</li>
            <li>Deposit: ₹1,50,000</li>
            <li>Maintenance: ₹3,000</li>
          </ul>
        </div>
      </section>
      <aside className="rounded-2xl border p-4">
        <h2 className="font-semibold">Book visit</h2>
        <BookingForm propertyId={params.id} />
      </aside>
    </main>
  );
}
