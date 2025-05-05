import Link from 'next/link';
import AnimatedName from './AnimateName';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <AnimatedName />
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/passwordgame" className="hover:underline">
            Password Game
          </Link>
        </li>
      </ul>
    </nav>
  );
}
