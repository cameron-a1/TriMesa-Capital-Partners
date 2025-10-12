import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'TriMesa Capital Partners',
  description:
    'CIMA-regulated Cayman GP managing ECO (private credit) and PESO (private equity) in global essential-service markets.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#2C2C2C] antialiased">
        <header className="border-b border-[#E5E7EB]">
          <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 font-semibold text-[#0C2239]">
              <Image src="/logo-trimesa.svg" alt="TriMesa" width={28} height={28} className="h-7 w-auto" /> TriMesa
            </Link>
            <Link href="/platform">Platform</Link>
            <Link href="/funds/eco">ECO</Link>
            <Link href="/funds/peso">PESO</Link>
            <Link href="/esg">ESG & Impact</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/contact" className="ml-auto rounded-2xl px-4 py-2 bg-[#D1A234] text-white">
              Request LP Access
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-[#6B7280] flex flex-col md:flex-row items-center justify-between gap-2">
            <div>© 2025 TriMesa Capital Partners. All rights reserved.</div>
            <div>Confidential institutional material. Not an offer or solicitation.</div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

