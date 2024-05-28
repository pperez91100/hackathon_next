import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-6 bg-gray-900 text-white z-50">
        <Link className="text-xl font-bold" href="/">
            Predict JO
        </Link>
        <div className="flex space-x-4">
            <Link className="hover:text-gray-400" href="/database">
              Show Database
            </Link>
            <Link className="hover:text-gray-400" href="/olympic_predictions">
              Olympic Predictions
            </Link>
            <Link className="hover:text-gray-400" href="#">
              xxxxx
            </Link>
        </div>
    </nav>
  )
}