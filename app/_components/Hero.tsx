import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <Image src="/logo-trimesa.svg" alt="TriMesa Capital Partners" width={64} height={64} className="mx-auto mb-6 h-16" />
      <h1 className="text-4xl md:text-5xl font-semibold text-[#0C2239]">
        Building resilient yield & impact portfolios globally
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg text-[#2C2C2C]">
        TriMesa Capital Partners is a CIMA-regulated Cayman GP. We manage two complementary
        strategies under one governance system — <strong>ECO</strong> (private credit) and
        <strong> PESO</strong> (private equity) — executed via Mauritius GBC1 SPVs and local operating vehicles.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/contact" className="rounded-2xl px-6 py-3 bg-[#D1A234] text-white font-medium hover:opacity-90">Request LP Access</Link>
        <Link href="/platform" className="rounded-2xl px-6 py-3 border border-[#0C2239] text-[#0C2239] hover:bg-[#0C2239] hover:text-white">Platform Overview</Link>
      </div>
    </section>
  );
}

