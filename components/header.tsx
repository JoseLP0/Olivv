"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-5 md:px-8 bg-white/80 backdrop-blur">
      <Link href="/" className="flex items-center gap-2">
        {/* <Image src="/olivv-logo.svg" alt="Olivv" width={28} height={28} /> */}
        <span className="font-semibold tracking-tight">Olivv</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link href="#platform" className="hover:opacity-80 transition">
          Platform
        </Link>
        <div className="relative group">
          <div className="inline-flex items-center gap-1 hover:opacity-80 cursor-pointer">
            Products
          </div>
          <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out fixed left-0 right-0 top-16 z-50 w-screen backdrop-blur-lg">
            <div className="bg-white/80 backdrop-blur-sm rounded-b-xl">
              <ul className="py-2">
                <li>
                  <Link href="#hero" className="block px-4 py-2.5 hover:bg-slate-50">
                    Overview
                    <p className="text-xs text-slate-500">
                      What Olivv offers at a glance
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="block px-4 py-2.5 hover:bg-slate-50">
                    Platform
                    <p className="text-xs text-slate-500">
                      APIs, dashboard, real-time events
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="block px-4 py-2.5 hover:bg-slate-50">
                    Solutions
                    <p className="text-xs text-slate-500">
                      For engineering, product, growth
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="block px-4 py-2.5 hover:bg-slate-50">
                    Pricing
                    <p className="text-xs text-slate-500">Simple and predictable</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link href="/blog" className="hover:opacity-80 transition">Blog</Link>
      </nav>

      <div className="hidden sm:flex items-center gap-2">
        <Link
          href="/contact"
          className="px-4 h-9 grid place-items-center text-sm rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
