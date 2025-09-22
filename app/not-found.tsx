import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center align-center text-center px-2">
      <h1 className="text-7xl font-extrabold text-blue-600 drop-shadow-lg">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page not found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you’re looking for doesn’t exist.  
        Don’t worry, you can head back to safer ground.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back Home
        </Link>
        <Link
          href="/blog"
          className="px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Visit Blog
        </Link>
      </div>

    </main>
  )
}
