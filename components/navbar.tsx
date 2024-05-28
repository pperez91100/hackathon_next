import Link from "next/link"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <nav className="md:hidden flex fixed top-0 left-0 right-0 justify-between items-center py-4 px-6 bg-gray-900 text-white z-50">
            <Button className="md:hidden bg-gray-900" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </nav>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white border-0">
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/database">
              Show Database
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/olympic_predictions">
              Olympic Predictions
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <nav className="md:flex hidden fixed top-0 left-0 right-0 justify-between items-center py-4 px-6 bg-gray-900 text-white z-50">
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
      </>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}