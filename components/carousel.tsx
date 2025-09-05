"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Carousel data (you can keep it here or move into a constants file if reused)
const OFFERING = [
  {
    no: "01",
    title: "Ideation",
    caption: "Rapid prototyping, research & development, user insights & testing",
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
      "Quality assurance, product management, end-to-end software maintenance",
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

export default function SolutionsCarousel() {
  const trackRef = useRef<HTMLOListElement | null>(null);

  // Ensure scroll starts at the leftmost position
  useEffect(() => {
    const timer = setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft = 0;
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
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-black drop-shadow-lg">
          Leverage Full Digital <span>Product Expertise</span>
        </h2>
        <p className="mt-3 text-base md:text-lg max-w-[65ch] mx-auto text-center text-black drop-shadow-md">
          Whether you want to consult an idea, add missing capabilities,
          quickly expand your team, or hand over a project — we've got you
          covered.
        </p>
      </header>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scrollByAmount("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 grid place-items-center max-[2500px]:block min-[2501px]:hidden"
          aria-label="Scroll left"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollByAmount("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 grid place-items-center max-[2500px]:block min-[2501px]:hidden"
          aria-label="Scroll right"
        >
          ›
        </button>

        {/* Track */}
        <ol
          ref={trackRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 px-6 scroll-smooth scroll-pl-6 scroll-pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-[2500px]:flex max-[2500px]:overflow-x-auto max-[2500px]:snap-x max-[2500px]:snap-mandatory min-[2501px]:justify-center min-[3001px]:overflow-x-visible min-[3001px]:gap-8"
          aria-label="Offerings"
        >
          {OFFERING.map((item) => (
            <li
              key={item.no}
              className="homepage-offering__benefit min-w-[320px] max-w-[560px] w-full h-[650px] max-h-[650px] snap-start flex-shrink-0"
            >
              <div className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-none overflow-hidden w-full h-full flex flex-col">
                {/* Illustration */}
                <figure className="relative w-full h-[488px] flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 320px, 560px"
                    onError={(e) => {
                      // @ts-ignore
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement as HTMLElement | null;
                      if (parent) {
                        parent.classList.add(
                          "bg-gradient-to-br",
                          "from-slate-100",
                          "to-slate-200"
                        );
                      }
                    }}
                  />
                </figure>

                {/* Text */}
                <a
                  href={item.href}
                  className="block px-5 py-4 h-[162px] flex flex-col justify-center"
                >
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
