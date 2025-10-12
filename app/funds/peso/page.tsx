export default function PESO() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy">PESO Fund I — Private Equity</h1>
      <p className="mt-3 text-charcoal/80 max-w-3xl">
        PESO Fund I is TriMesa’s private equity and impact-growth strategy investing in control and scalable growth positions across essential-service industries.
      </p>
      <div className="gold-divider my-6" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Key Terms</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Size: $25m · GP commit 2%</li>
            <li>Pref 14% · Carry 30% · Fees 3%→1%</li>
            <li>Term 10 years · European waterfall</li>
            <li>Distributions: exit-based</li>
            <li>Target IRR: 25%</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Value Creation</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Stabilise → Optimise → Scale → Exit</li>
            <li>Target 15–20% EBITDA uplift within 12 months</li>
            <li>Control or significant minority with governance rights</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
