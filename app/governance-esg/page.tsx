export default function GovESG() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy">Governance & ESG</h1>
      <div className="gold-divider my-6" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-lightbg border border-gray-200">
          <h3 className="text-navy font-semibold">Governance</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Unified Investment Committee (Credit & Equity sub-committees)</li>
            <li>LP Advisory Committee (LPAC)</li>
            <li>Independent administration & annual Cayman audit</li>
            <li>European waterfall; fund-level clawback; key-person provisions</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 bg-lightbg border border-gray-200">
          <h3 className="text-navy font-semibold">ESG Framework</h3>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-1">
            <li>Aligned with IFC Performance Standards & UN PRI</li>
            <li>Lifecycle: Screening → Assessment → Action Plan → Monitoring</li>
            <li>Exclusion list: arms, coal, tobacco, gambling, forced labour</li>
            <li>KPIs: jobs, renewable capacity, emissions avoided, inclusion</li>
            <li>Annual third-party ESG audit; integrated ESG + NAV reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
