import Image from "next/image";
import Link from "next/link";

type CardProperty = {
  id: string;
  title: string;
  city: string;
  rent: number;
  image: string;
};

export function PropertyCard({ property }: { property: CardProperty }) {
  return (
    <Link href={`/properties/${property.id}`} className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md dark:bg-slate-900">
      <div className="relative h-52">
        <Image src={property.image} alt={property.title} fill className="object-cover" />
      </div>
      <div className="space-y-1 p-4">
        <h3 className="font-semibold">{property.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{property.city}</p>
        <p className="text-lg font-bold">₹{property.rent.toLocaleString()}/month</p>
      </div>
    </Link>
  );
}
