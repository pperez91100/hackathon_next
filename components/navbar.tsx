import Link from "next/link"

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-900 text-white">
        <Link className="text-xl font-bold" href="/">
            Predict JO
        </Link>
        <nav className="flex space-x-4">
            <Link className="hover:text-gray-400" href="/database">
            Show Database
            </Link>
            <Link className="hover:text-gray-400" href="#">
            xxxxx
            </Link>
            <Link className="hover:text-gray-400" href="#">
            xxxxx
            </Link>
        </nav>
    </header>
  )
}