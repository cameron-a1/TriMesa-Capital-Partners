export default function ECO() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy">ECO Fund I — Private Credit</h1>
      <p className="mt-3 text-charcoal/80 max-w-3xl">
        ECO Fund I is TriMesa’s structured-yield strategy focused on asset-backed, collateralised lending across essential-service sectors.
        The fund targets resilient cash flows with strong security packages.
      </p>
      <div className="gold-divider my-6" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Key Terms</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Size: $28.5m · GP commit 2%</li>
            <li>Pref 10% · Carry 20% · Fees 2%→1%</li>
            <li>Term 8 years · European waterfall</li>
            <li>Distributions: quarterly income + capital</li>
            <li>Target net IRR: 12–18%</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy font-semibold">Risk Controls</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Borrower ≤ 15% of fund</li>
            <li>Country ≤ 40% · Sector ≤ 30%</li>
            <li>Collateral coverage ≥ 125%</li>
            <li>Independent administration & annual audit</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
