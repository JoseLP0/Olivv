import Link from "next/link";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  light?: boolean;
  children?: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  light,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative isolate h-[calc(100vh-4rem+1px)] w-full snap-start"
    >
      <div
        className={[
          "absolute inset-0",
          light
            ? "bg-gradient-to-t from-white/60 via-white/30 to-white/10"
            : id === "platform" || id === "pricing"
            ? "bg-gradient-to-b from-black/30 via-black/15 to-transparent"
            : "bg-gradient-to-t from-black/30 via-black/15 to-transparent",
        ].join(" ")}
      />
      <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-6">
        {children ? (
          children
        ) : (
          <div className="flex flex-col items-center">
            <h1
              className={`text-4xl md:text-6xl font-bold tracking-tight ${
                light ? "text-slate-900" : "text-white drop-shadow"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-3 text-base md:text-lg max-w-[65ch] ${
                  light ? "text-slate-700" : "text-white/90"
                }`}
              >
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="rounded-full px-6 py-3 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                      light
                        ? "bg-white/70 text-slate-900 hover:bg-white/90"
                        : "bg-black/40 text-white hover:bg-black/60"
                    }`}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
