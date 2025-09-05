"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Section from "@/components/sections";
import SolutionsCarousel from "@/components/carousel";

const SECTIONS = [
  {
    id: "hero",
    title: "Build. Launch. Scale.",
    subtitle: "Modern software, minimal friction.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "See Features", href: "#platform" },
  },
  {
    id: "platform",
    title: "The Olivv Platform",
    subtitle: "APIs, dashboards, and real-time insights for any product.",
    primaryCta: { label: "Explore Platform", href: "/platform" },
    secondaryCta: { label: "Docs", href: "/docs" },
  },
  {
    id: "solutions",
    title: "Solutions for Every Team",
    subtitle: "From prototype to production—engineering, product, and growth.",
    primaryCta: { label: "View Solutions", href: "/solutions" },
    secondaryCta: { label: "Talk to Sales", href: "/contact" },
  },
  {
    id: "pricing",
    title: "Simple, Predictable Pricing",
    subtitle: "Start free. Scale when you’re ready.",
    primaryCta: { label: "See Pricing", href: "/pricing" },
    secondaryCta: { label: "Compare Plans", href: "/pricing#compare" },
  },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <Header />
      <main className="h-screen overflow-y-auto scroll-smooth">
        <div className="h-16" /> {/* Spacer for header */}
        {SECTIONS.map((s) =>
          s.id === "solutions" ? (
            <Section key={s.id} {...s}>
              <SolutionsCarousel />
            </Section>
          ) : (
            <Section key={s.id} {...s} />
          )
        )}
        <Footer />
      </main>
    </div>
  );
}
