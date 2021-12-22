import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex justify-around text-white mb-4 bg-blue-500 p-4">
      <div>
        <Link href="/">Events</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
