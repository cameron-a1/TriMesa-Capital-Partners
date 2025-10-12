export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-[#0C2239] mb-4">Contact</h1>
      <p className="mb-8">For institutional and accredited investors.</p>
      <form method="post" action="/api/contact" className="space-y-4">
        <input name="name" placeholder="Name" className="w-full border border-[#E5E7EB] rounded-xl p-3" required />
        <input name="org" placeholder="Organisation" className="w-full border border-[#E5E7EB] rounded-xl p-3" required />
        <input name="email" type="email" placeholder="Email" className="w-full border border-[#E5E7EB] rounded-xl p-3" required />
        <input name="jurisdiction" placeholder="Jurisdiction" className="w-full border border-[#E5E7EB] rounded-xl p-3" required />
        <textarea name="message" placeholder="Message" rows={5} className="w-full border border-[#E5E7EB] rounded-xl p-3" />
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" name="accredited" required /> I confirm I am an institutional or accredited investor.
        </label>
        <button className="rounded-2xl px-6 py-3 bg-[#D1A234] text-white">Submit</button>
      </form>
      <div className="mt-8 text-sm text-[#6B7280]">Or email: managingteam@trimesa.it.com · +1 (714) 222-0114</div>
    </section>
  );
}

