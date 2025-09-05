import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        <p>© {new Date().getFullYear()} Olivv</p>
        <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
        <Link href="/terms" className="hover:text-slate-900">Terms</Link>
      </div>
    </footer>
  );
}
