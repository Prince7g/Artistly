// components/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        🎤 Artistly
      </Link>
      <nav className="flex gap-4 text-sm md:text-base">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/artists" className="hover:text-blue-600">Explore Artists</Link>
        <Link href="/onboard" className="hover:text-blue-600">Onboard</Link>
        <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
      </nav>
    </header>
  );
}
