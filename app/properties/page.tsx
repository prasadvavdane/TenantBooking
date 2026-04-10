import { PropertyCard } from "@/components/properties/property-card";

const properties = [
  { id: "p1", title: "3BHK Villa", city: "Pune", rent: 55000, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { id: "p2", title: "1BHK Apartment", city: "Hyderabad", rent: 22000, image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" }
];

export default function PropertiesPage() {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-8">
      <h1 className="text-2xl font-bold">Explore Rentals</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
