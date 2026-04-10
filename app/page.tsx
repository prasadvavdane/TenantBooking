import Link from "next/link";
import { PropertyCard } from "@/components/properties/property-card";
import { SearchBar } from "@/components/properties/search-bar";

const featured = [
  { id: "1", title: "2BHK in Indiranagar", city: "Bengaluru", rent: 42000, image: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
  { id: "2", title: "Studio near BKC", city: "Mumbai", rent: 36000, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858" }
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-8">
      <section className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-8 text-white">
        <h1 className="text-4xl font-bold">Find your next home without brokerage</h1>
        <p className="mt-3 max-w-2xl text-sm text-blue-100">Search verified listings, schedule visits, chat with owners, and pay securely.</p>
        <div className="mt-6"><SearchBar /></div>
        <div className="mt-6 flex gap-3">
          <Link href="/properties" className="rounded-lg bg-white px-4 py-2 font-semibold text-brand-700">Browse Properties</Link>
          <Link href="/owner/properties/new" className="rounded-lg border border-white/60 px-4 py-2">List Property</Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {featured.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </main>
  );
}
