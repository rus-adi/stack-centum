import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-6xl p-6">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Centum Stack — School 2.0</h1>
              <p className="text-sm text-slate-400">Leadership-first transformation operating system</p>
            </div>
            <nav className="flex gap-4 text-sm text-slate-300">
              <Link href="/">Command Center</Link>
              <Link href="/packs">Transformation Packs</Link>
              <Link href="/tools">Tool Catalog 2.0</Link>
              <Link href="/training">Training Hub</Link>
              <Link href="/licenses">Partner Ops</Link>
              <Link href="/growth-assets">Parent Growth Assets</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
