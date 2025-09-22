import Link from "next/link"
import { posts } from "./data/posts"

export default function HomePage() {
  // Show only 3 latest posts
  const latestPosts = posts.slice(0, 3)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Welcome to My Simple Blog
          </h1>
          <p className="text-lg text-blue-100 mb-8">
                Explore a few ideas or topics I’m currently writing about.
          </p>
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-white text-blue-700 font-semibold px-6 py-3 shadow hover:bg-gray-100 transition"
          >
            Read the Blog →
          </Link>
        </div>
      </section>

      {/* Latest Posts Preview */}
      <section className="container mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl border bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
