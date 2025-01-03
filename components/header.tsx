import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className=" sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    
      <div className="  p-5 container flex  h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Hariharan </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/projects"
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/education"
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              Education
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground/80 text-foreground/60 transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

