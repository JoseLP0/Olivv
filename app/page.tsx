// Import the Next.js Image component for optimized images
import Image from "next/image";
// Import the Next.js Link component for client-side navigation
import Link from "next/link";

// Define a TypeScript type for each section of the page
type Section = {
  id: string; // Unique section id (used for anchors)
  title: string; // Main heading for the section
  subtitle?: string; // Optional subheading
  primaryCta?: { label: string; href: string }; // Optional primary call-to-action
  secondaryCta?: { label: string; href: string }; // Optional secondary call-to-action
  bg: string; // Background image path (in /public)
  light?: boolean; // If true, section uses light text styles
};

// Array of sections to render on the page
const SECTIONS: Section[] = [
  {
    id: "hero", // Section anchor id
    title: "Build. Launch. Scale.", // Section title
    subtitle: "Modern software, minimal friction.", // Section subtitle
    primaryCta: { label: "Get Started", href: "/contact" }, // Primary CTA
    secondaryCta: { label: "See Features", href: "#platform" }, // Secondary CTA
    bg: "/hero.jpg", // Background image
  },
  {
    id: "platform",
    title: "The Olivv Platform",
    subtitle: "APIs, dashboards, and real‑time insights for any product.",
    primaryCta: { label: "Explore Platform", href: "/platform" },
    secondaryCta: { label: "Docs", href: "/docs" },
    bg: "/panel-1.jpg",
  },
  {
    id: "solutions",
    title: "Solutions for Every Team",
    subtitle: "From prototype to production—engineering, product, and growth.",
    primaryCta: { label: "View Solutions", href: "/solutions" },
    secondaryCta: { label: "Talk to Sales", href: "/contact" },
    bg: "/panel-2.jpg",
    light: true, // Use light text styles for this section
  },
  {
    id: "pricing",
    title: "Simple, Predictable Pricing",
    subtitle: "Start free. Scale when you’re ready.",
    primaryCta: { label: "See Pricing", href: "/pricing" },
    secondaryCta: { label: "Compare Plans", href: "/pricing#compare" },
    bg: "/panel-3.jpg",
  },
];

// Main page component
export default function Home() {
  return (
    // Root container with white background and dark text
    <div className="bg-white text-slate-900">
      {/* Sticky header at the top of the page */}
      <header className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-5 md:px-8 bg-white/80 backdrop-blur /*border-b border-slate-200*/">
        {/* Logo and brand name, links to home */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/olivv-logo.svg" alt="Olivv" width={28} height={28} />{" "}
          {/* Logo image */}
          <span className="font-semibold tracking-tight">Olivv</span>{" "}
          {/* Brand name */}
        </Link>

        {/* Main navigation, hidden on small screens */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Link to platform section */}
          <Link href="#platform" className="hover:opacity-80 transition">
            Platform
          </Link>

          {/* Dropdown menu for Products */}
          <div className="relative group">
            {/* Dropdown trigger */}
            <div className="inline-flex items-center gap-1 hover:opacity-80 transition cursor-pointer">
              Products
            </div>

            {/* Dropdown menu, appears on hover, full width */}
            <div
              className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-200 ease-out
                         fixed left-0 right-0 top-16 z-50 w-screen backdrop-blur-lg"
              role="menu"
            >
              {/* Match the dropdown background exactly to the header: bg-white/80 and backdrop-blur */}
              <div className="bg-white/80 backdrop-blur shadow-lg overflow-hidden rounded-b-xl">
                <ul className="py-2">
                  {/* Overview menu item */}
                  <li>
                    <Link
                      href="#hero"
                      className="block px-4 py-2.5 hover:bg-slate-50"
                      role="menuitem"
                    >
                      Overview
                      <p className="text-xs text-slate-500">
                        What Olivv offers at a glance
                      </p>
                    </Link>
                  </li>
                  {/* Platform menu item */}
                  <li>
                    <Link
                      href="#platform"
                      className="block px-4 py-2.5 hover:bg-slate-50"
                      role="menuitem"
                    >
                      Platform
                      <p className="text-xs text-slate-500">
                        APIs, dashboard, real‑time events
                      </p>
                    </Link>
                  </li>
                  {/* Solutions menu item */}
                  <li>
                    <Link
                      href="#solutions"
                      className="block px-4 py-2.5 hover:bg-slate-50"
                      role="menuitem"
                    >
                      Solutions
                      <p className="text-xs text-slate-500">
                        For engineering, product, growth
                      </p>
                    </Link>
                  </li>
                  {/* Pricing menu item */}
                  <li>
                    <Link
                      href="#pricing"
                      className="block px-4 py-2.5 hover:bg-slate-50"
                      role="menuitem"
                    >
                      Pricing
                      <p className="text-xs text-slate-500">
                        Simple and predictable
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Link to blog page */}
          <Link href="/blog" className="hover:opacity-80 transition">
            Blog
          </Link>
        </nav>

        {/* Contact button, hidden on extra-small screens */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/contact"
            className="px-4 h-9 grid place-items-center text-sm rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Main content: vertical panels with snap scrolling */}
      <main className="h-screen overflow-y-auto scroll-smooth">
        {/* Spacer to offset fixed header */}
        <div className="h-16" />
        {/* Render each section from SECTIONS */}
        {SECTIONS.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="relative h-[calc(100vh-4rem)] w-full snap-start"
          >
            {/* Section background image */}
            <Image
              src={s.bg}
              alt=""
              fill
              priority={s.id === "hero"}
              className="object-cover"
            />

            {/* Overlay gradient for text legibility */}
            <div
              className={[
                "absolute inset-0",
                s.light
                  ? "bg-gradient-to-t from-white/60 via-white/30 to-white/10"
                  : "bg-gradient-to-t from-black/30 via-black/15 to-transparent",
              ].join(" ")}
            />

            {/* Section content (title, subtitle, CTAs) */}
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
              {/* Section title */}
              <h1
                className={[
                  "text-4xl md:text-6xl font-bold tracking-tight",
                  s.light ? "text-slate-900" : "text-white drop-shadow",
                ].join(" ")}
              >
                {s.title}
              </h1>

              {/* Section subtitle, if present */}
              {s.subtitle && (
                <p
                  className={[
                    "mt-3 text-base md:text-lg max-w-[65ch]",
                    s.light ? "text-slate-700" : "text-white/90",
                  ].join(" ")}
                >
                  {s.subtitle}
                </p>
              )}

              {/* Render CTAs if present */}
              {(s.primaryCta || s.secondaryCta) && (
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {/* Primary CTA button */}
                  {s.primaryCta && (
                    <Link
                      href={s.primaryCta.href}
                      className="rounded-full px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                    >
                      {s.primaryCta.label}
                    </Link>
                  )}
                  {/* Secondary CTA button */}
                  {s.secondaryCta && (
                    <Link
                      href={s.secondaryCta.href}
                      className={[
                        "rounded-full px-6 py-3 text-sm font-medium border transition",
                        s.light
                          ? "border-slate-300 bg-white/70 text-slate-900 hover:bg-white/90"
                          : "border-white/40 bg-black/40 text-white hover:bg-black/60",
                      ].join(" ")}
                    >
                      {s.secondaryCta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
        {/* Footer with copyright and links */}
        <footer className="bg-white text-slate-600 text-xs border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <p>© {new Date().getFullYear()} Olivv</p>{" "}
            {/* Current year copyright */}
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
