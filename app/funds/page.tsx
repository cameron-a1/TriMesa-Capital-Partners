import { FundCard } from "../components/FundCard";

export default function Funds() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-navy">Funds</h1>
      <p className="mt-3 text-charcoal/80 max-w-3xl">
        Two complementary strategies under one governance system, providing diversified exposure to essential-service sectors globally.
      </p>
      <div className="gold-divider my-8" />
      <div className="grid md:grid-cols-2 gap-6">
        <FundCard
          title="ECO Fund I — Private Credit"
          subtitle="Asset-backed, collateralised lending in essential-service sectors."
          href="/funds/eco"
          facts={[
            {label:"Target Net IRR", value:"12–18%"},
            {label:"Pref / Carry", value:"10% / 20%"},
            {label:"Fees", value:"2% → 1%"},
            {label:"Term", value:"8 years"},
            {label:"Distribution", value:"Quarterly income + capital"}
          ]}
        />
        <FundCard
          title="PESO Fund I — Private Equity"
          subtitle="Control & growth equity in scalable essential-service businesses."
          href="/funds/peso"
          facts={[
            {label:"Target IRR", value:"25%"},
            {label:"Pref / Carry", value:"14% / 30%"},
            {label:"Fees", value:"3% → 1%"},
            {label:"Term", value:"10 years"},
            {label:"Distribution", value:"Exit-based"}
          ]}
        />
      </div>
    </section>
  );
}
