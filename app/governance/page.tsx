export default function Governance() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
      <h1 className="text-3xl font-semibold text-[#0C2239]">Governance & Economics</h1>
      <h2 className="text-xl font-semibold text-[#0C2239]">Oversight</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Investment Committee (unanimous &gt; $1m; 75% otherwise); Credit & Equity sub-committees</li>
        <li>LP Advisory Committee (LPAC); Conflicts Committee; key-person provisions</li>
        <li>Fund-level clawback backed by GP principals’ guarantees</li>
      </ul>
      <h2 className="text-xl font-semibold text-[#0C2239]">Economics Snapshot</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-[#E5E7EB]">
          <thead className="bg-[#F8FAFC]">
            <tr><th className="p-3 text-left">Feature</th><th className="p-3 text-left">ECO</th><th className="p-3 text-left">PESO</th></tr>
          </thead>
          <tbody>
            <tr><td className="p-3">Target net IRR</td><td className="p-3">12–18%</td><td className="p-3">25%</td></tr>
            <tr><td className="p-3">Preferred return</td><td className="p-3">10%</td><td className="p-3">12–14% (official)</td></tr>
            <tr><td className="p-3">Carry</td><td className="p-3">20%</td><td className="p-3">30%</td></tr>
            <tr><td className="p-3">Fees (IP → post)</td><td className="p-3">2% invested → 1%</td><td className="p-3">3% drawn → 1%</td></tr>
            <tr><td className="p-3">Waterfall</td><td className="p-3">Dual (income + capital)</td><td className="p-3">Single (capital)</td></tr>
            <tr><td className="p-3">Term</td><td className="p-3">8 yrs + up to 4×1yr</td><td className="p-3">10 yrs + extensions</td></tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-semibold text-[#0C2239]">Reporting & Audit</h2>
      <p>Quarterly NAV by CIMA-licensed administrator; annual Cayman audit; compliance certificate.</p>
    </section>
  );
}

