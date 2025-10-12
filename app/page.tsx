export default function Page() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-semibold text-navy">
        Institutional Dual-Fund Platform for Resilient Yield & Impact
      </h1>
      <p className="mt-3 text-charcoal/80 max-w-3xl">
        TriMesa Capital Partners is a CIMA-regulated Cayman GP operating global execution vehicles through Mauritius GBC1 and local SPVs.
        We manage two complementary strategies under one governance system: ECO Fund I (private credit / structured yield) and PESO Fund I (private equity / impact-growth).
      </p>
      <div className="gold-divider my-8" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy text-lg font-semibold">ECO Fund I — Private Credit</h3>
          <p className="text-sm text-charcoal/70 mt-1">Asset-backed, collateralised lending in essential-service sectors.</p>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Target Net IRR: 12–18%</li>
            <li>Terms: 10% pref · 20% carry · 2%→1% fees · 8-year term</li>
            <li>Distributions: quarterly income + capital</li>
            <li>Risk: borrower ≤15% · country ≤40% · sector ≤30% · collateral ≥125%</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-soft">
          <h3 className="text-navy text-lg font-semibold">PESO Fund I — Private Equity</h3>
          <p className="text-sm text-charcoal/70 mt-1">Control & growth equity in scalable essential-service businesses.</p>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Target IRR: 25%</li>
            <li>Terms: 14% pref · 30% carry · 3%→1% fees · 10-year term</li>
            <li>Distributions: exit-based</li>
            <li>Value: Stabilise → Optimise → Scale → Exit (target 15–20% EBITDA uplift)</li>
          </ul>
        </div>
      </div>
      <div className="gold-divider my-8" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl p-6 bg-lightbg border border-gray-200">
          <h4 className="text-navy font-semibold">Governance</h4>
          <p className="text-sm mt-2 text-charcoal/80">Unified Investment Committee (Credit & Equity), LPAC oversight, independent administration, annual Cayman audit.</p>
        </div>
        <div className="rounded-2xl p-6 bg-lightbg border border-gray-200">
          <h4 className="text-navy font-semibold">Alignment</h4>
          <p className="text-sm mt-2 text-charcoal/80">European waterfall with full GP clawback, key-person provisions, and 2% GP commitment per fund.</p>
        </div>
        <div className="rounded-2xl p-6 bg-lightbg border border-gray-200">
          <h4 className="text-navy font-semibold">ESG & Impact</h4>
          <p className="text-sm mt-2 text-charcoal/80">IFC-aligned framework, exclusion list, quarterly KPIs (jobs, renewable capacity, emissions avoided, inclusion) with third-party verification.</p>
        </div>
      </div>
    </section>
  );
}
