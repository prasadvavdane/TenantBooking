export default function AdminPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-4 grid gap-3 md:grid-cols-4">
        <div className="rounded-xl border p-4">Total users</div>
        <div className="rounded-xl border p-4">Total listings</div>
        <div className="rounded-xl border p-4">Total bookings</div>
        <div className="rounded-xl border p-4">Revenue</div>
      </div>
    </main>
  );
}
