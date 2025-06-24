import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold">
        🎤 Artistly
      </Link>
      <nav className="flex space-x-4 text-sm md:text-base">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/artists" className="hover:underline">
          Explore Artists
        </Link>
        <Link href="/onboard" className="hover:underline">
          Onboard
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
