import { RegisterForm } from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-4 text-2xl font-bold">Create account</h1>
      <RegisterForm />
    </main>
  );
}
