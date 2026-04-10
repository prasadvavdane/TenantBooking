import { PropertyForm } from "@/components/forms/property-form";

export default function NewPropertyPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-2xl font-bold">List a Property</h1>
      <PropertyForm />
    </main>
  );
}
