'use client';
import Link from 'next/link';

export default function Explorer() {
  return (
    <aside className="w-64 bg-gray-100 border-r border-dark_border p-4 flex flex-col overflow-y-auto">
      <h2 className="text-sm font-semibold text-gray-600 mb-2">app</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:bg-gray-200">
          Home
        </Link>
        <Link href="/" className="hover:bg-gray-200">
          Projects
        </Link>
        <Link href="/" className="hover:bg-gray-200">
          About Me
        </Link>
        <Link href="/" className="hover:bg-gray-200">
          Contact
        </Link>
        <Link href="/passwordgame" className="hover:bg-gray-200">
          Password game
        </Link>
      </nav>
    </aside>
  );
}
