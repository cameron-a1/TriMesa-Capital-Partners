export default function FundCards() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-semibold text-[#0C2239] text-center mb-10">Funds at a Glance</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <a href="/funds/eco" className="border border-[#E5E7EB] rounded-2xl p-6 bg-white shadow-sm hover:shadow-md">
          <h3 className="text-xl font-semibold text-[#0C2239] mb-4">ECO — Emerging Credit Opportunities I</h3>
          <ul className="space-y-2 text-[#2C2C2C]">
            <li>Asset-backed, collateralised lending in essential-service sectors</li>
            <li><strong>12–18% net IRR</strong> · <strong>8–12% distribution yield</strong></li>
            <li>European-style dual waterfall (income + capital)</li>
          </ul>
        </a>
        <a href="/funds/peso" className="border border-[#E5E7EB] rounded-2xl p-6 bg-white shadow-sm hover:shadow-md">
          <h3 className="text-xl font-semibold text-[#0C2239] mb-4">PESO — Private Emerging Special Opportunities I</h3>
          <ul className="space-y-2 text-[#2C2C2C]">
            <li>Control & growth equity in scalable, impact-aligned businesses</li>
            <li><strong>25% IRR</strong> · <strong>12–14% pref</strong> · <strong>30% carry</strong></li>
            <li>IFC-aligned ESG · independent reviews</li>
          </ul>
        </a>
      </div>
    </section>
  );
}

