import type { Metadata } from "next"
import Link from "next/link"
import "../globals.css"

export const metadata: Metadata = {
  title: "Simple Blog App",
  description: "A minimal Next.js blog project",
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Simple Blog
          </Link>

          {/* Nav Links */}
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <main className="container mx-auto px-6 py-10">{children}</main>
    </>
  )
}
