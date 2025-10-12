export default function Team() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy">Team</h1>
      <p className="mt-3 text-charcoal/80 max-w-3xl">
        TriMesa combines capital formation, structuring, and operating expertise. Governance is overseen by a unified Investment Committee with independent administration.
      </p>
      <div className="gold-divider my-6" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Henry Serafime Romantsov</h3>
          <p className="text-sm text-charcoal/80">Fund Manager · Head of Capital Strategy</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Cameron Zogo</h3>
          <p className="text-sm text-charcoal/80">Head of Capital Formation</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Senior Institutional Partner</h3>
          <p className="text-sm text-charcoal/80">Advisory</p>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Strategic Partner</h3>
          <p className="text-sm text-charcoal/80">Supply Chain & Logistics</p>
        </div>
      </div>
    </section>
  );
}
