"use client";

// Import the Next.js Image component for optimized images
import Image from "next/image";
// Import the Next.js Link component for client-side navigation
import Link from "next/link";
import { useRef, useEffect } from "react";

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
    id: "platform", // Section anchor id
    title: "The Olivv Platform", // Section title
    subtitle: "APIs, dashboards, and real‑time insights for any product.", // Section subtitle
    primaryCta: { label: "Explore Platform", href: "/platform" }, // Primary CTA
    secondaryCta: { label: "Docs", href: "/docs" }, // Secondary CTA
    bg: "/panel-1.jpg", // Background image
  },
  {
    id: "solutions", // Section anchor id
    title: "Solutions for Every Team", // Section title
    subtitle: "From prototype to production—engineering, product, and growth.", // Section subtitle
    primaryCta: { label: "View Solutions", href: "/solutions" }, // Primary CTA
    secondaryCta: { label: "Talk to Sales", href: "/contact" }, // Secondary CTA
    bg: "/panel-2.jpg", // Background image // Use light text styles for this section
  },
  {
    id: "pricing", // Section anchor id
    title: "Simple, Predictable Pricing", // Section title
    subtitle: "Start free. Scale when you’re ready.", // Section subtitle
    primaryCta: { label: "See Pricing", href: "/pricing" }, // Primary CTA
    secondaryCta: { label: "Compare Plans", href: "/pricing#compare" }, // Secondary CTA
    bg: "/panel-3.jpg", // Background image
  },
];

// Carousel data modeled on the section you shared
const OFFERING = [
  {
    no: "01",
    title: "Ideation",
    caption:
      "Rapid prototyping, research & development, user insights & testing",
    // Use local placeholders (drop images in /public if you have them)
    img: "/offer-ideate.png",
    alt: "Ideation illustration",
    href: "#ideation",
  },
  {
    no: "02",
    title: "Design",
    caption: "Product design, UX & UI design, design system development",
    img: "/offer-design.png",
    alt: "Design illustration",
    href: "#design",
  },
  {
    no: "03",
    title: "Development",
    caption: "Web, mobile, AI & GenAI, MVPs, cloud",
    img: "/offer-develop.png",
    alt: "Development illustration",
    href: "#development",
  },
  {
    no: "04",
    title: "Maintenance",
    caption:
      "Quality assurance, product management, end‑to‑end software maintenance",
    img: "/offer-maintain.png",
    alt: "Maintenance illustration",
    href: "#maintenance",
  },
  {
    no: "05",
    title: "Scaling",
    caption:
      "Product strategy & expansion, continuous discovery, automation & optimization",
    img: "/offer-scale.png",
    alt: "Scaling illustration",
    href: "#scaling",
  },
];

// Lightweight horizontal carousel used only in the “solutions” section
function SolutionsCarousel({ light = false }: { light?: boolean }) {
  const trackRef = useRef<HTMLOListElement | null>(null);

  // Ensure scroll position starts at the beginning
  useEffect(() => {
    const timer = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft = 0;
        // Force a reflow to ensure the scroll position is applied
        trackRef.current.style.scrollBehavior = "auto";
        trackRef.current.scrollLeft = 0;
        trackRef.current.style.scrollBehavior = "smooth";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li") as HTMLLIElement | null;
    const amount = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <header className="mb-6 md:mb-8 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
          Leverage full digital{" "}
          <span className="font-extrabold">product expertise</span>
        </h2>
        <p className="mt-3 text-base md:text-lg max-w-[65ch] mx-auto text-center text-black">
          Whether you want to consult an idea, add missing capabilities, quickly
          expand your team, or hand over a project — we've got you covered.
        </p>
      </header>

      {/* Carousel Container with Hover Controls */}
      <div className="relative group">
        {/* Left Arrow - Hidden until hover */}
        <button
          onClick={() => scrollByAmount("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 grid place-items-center"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Right Arrow - Hidden until hover */}
        <button
          onClick={() => scrollByAmount("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 grid place-items-center"
          aria-label="Scroll right"
        >
          ›
        </button>

        {/* Track */}
        <ol
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 px-6 scroll-smooth scroll-pl-6 scroll-pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          aria-label="Offerings"
        >
          {OFFERING.map((item, index) => (
            <li
              key={item.no}
              className="homepage-offering__benefit min-w-[300px] md:min-w-[420px] snap-start"
            >
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-none transition overflow-hidden">
                {/* Illustration (falls back to gradient block if image missing) */}
                <figure className="relative w-full aspect-square">
                  {/* If you add /public/offer-*.png the Image will show; otherwise gradient block still looks nice */}
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 320px, 420px"
                    onError={(e) => {
                      // @ts-ignore
                      e.currentTarget.style.display = "none";
                      const parent =
                        (e.currentTarget.parentElement as HTMLElement) || null;
                      if (parent)
                        parent.classList.add(
                          "bg-gradient-to-br",
                          "from-slate-100",
                          "to-slate-200"
                        );
                    }}
                  />
                </figure>

                {/* Text */}
                <a href={item.href} className="block px-5 py-4">
                  <h3 className="text-xl md:text-2xl font-semibold flex items-baseline gap-3">
                    <span className="text-slate-400 font-mono">{item.no}</span>
                    <span className="text-slate-900">{item.title}</span>
                  </h3>
                  <p className="mt-1.5 text-sm md:text-[15px] leading-snug text-slate-600">
                    {item.caption}
                  </p>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

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
              {/* Dropdown background and container */}
              <div className="bg-white/80 backdrop-blur-sm shadow-none overflow-hidden rounded-b-xl">
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
      <main
        className="h-screen overflow-y-auto scroll-smooth
                   [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                   [&>section]:border-0 [&>section]:ring-0
                   [&>section]:outline-none [&>section]:shadow-none
                   [&>section]:border-none [&>section]:border-0
                   [&>section]:divide-y-0 [&>section]:divide-x-0"
      >
        {/* Spacer to offset fixed header */}
        <div className="h-16" />
        {/* Render each section from SECTIONS */}
        {SECTIONS.map((s) => (
          <section
            key={s.id} // Unique key for React
            id={s.id} // Section anchor for navigation
            className="relative isolate h-[calc(100vh-4rem+1px)] w-full snap-start border-0 border-none outline-none" // Full viewport height minus header, snap scrolling
          >
            {/* Overlay gradient for text legibility */}
            <div
              className={[
                "absolute inset-0", // Fill the section
                s.light
                  ? "bg-gradient-to-t from-white/60 via-white/30 to-white/10" // Light overlay for light sections
                  : s.id === "platform" || s.id === "pricing"
                  ? "bg-gradient-to-b from-black/30 via-black/15 to-transparent" // Flipped gradient for platform and pricing sections
                  : "bg-gradient-to-t from-black/30 via-black/15 to-transparent", // Dark overlay for other dark sections
              ].join(" ")}
            />

            {/* Section content */}
            <div
              className={`relative z-10 h-full w-full flex items-center justify-center text-center ${
                s.id === "solutions" ? "" : "px-6"
              }`}
            >
              {/* For the "solutions" section, render the carousel instead of the generic block */}
              {s.id === "solutions" ? (
                <div className="w-full">
                  <SolutionsCarousel light={!!s.light} />
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <h1
                    className={[
                      "text-4xl md:text-6xl font-bold tracking-tight",
                      s.light ? "text-slate-900" : "text-white drop-shadow",
                    ].join(" ")}
                  >
                    {s.title}
                  </h1>

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

                  {(s.primaryCta || s.secondaryCta) && (
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      {s.primaryCta && (
                        <Link
                          href={s.primaryCta.href}
                          className="rounded-full px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                        >
                          {s.primaryCta.label}
                        </Link>
                      )}
                      {s.secondaryCta && (
                        <Link
                          href={s.secondaryCta.href}
                          className={[
                            "rounded-full px-6 py-3 text-sm font-medium transition",
                            s.light
                              ? "bg-white/70 text-slate-900 hover:bg-white/90"
                              : "bg-black/40 text-white hover:bg-black/60",
                          ].join(" ")}
                        >
                          {s.secondaryCta.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
        {/* Footer with copyright and links */}
        <footer className="bg-white text-slate-600 text-xs">
          <div className="max-w-6xl mx-auto px-6 py-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            <p>© {new Date().getFullYear()} Olivv</p>
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
