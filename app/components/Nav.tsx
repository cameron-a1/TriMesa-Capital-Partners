"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/funds", label: "Funds" },
  { href: "/governance-esg", label: "Governance & ESG" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-gray-200/80 bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-navy font-semibold tracking-wide text-lg">TriMesa Capital Partners</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-charcoal/80 hover:text-navy transition">
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu"><Menu className="text-navy" /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-sm text-charcoal/80">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
