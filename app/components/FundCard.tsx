import Link from "next/link";

export function FundCard({
  title, subtitle, facts, href
}: { title: string; subtitle: string; facts: { label: string; value: string }[]; href: string; }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-soft bg-white">
      <h3 className="text-navy text-lg font-semibold">{title}</h3>
      <p className="text-sm text-charcoal/70 mt-1">{subtitle}</p>
      <div className="gold-divider my-4" />
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {facts.map((f) => (
          <div key={f.label} className="flex justify-between text-sm">
            <dt className="text-charcoal/70">{f.label}</dt>
            <dd className="font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4">
        <Link href={href} className="text-navy text-sm underline underline-offset-4">Learn more</Link>
      </div>
    </div>
  );
}
