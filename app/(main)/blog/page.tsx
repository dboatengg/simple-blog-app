import Link from "next/link"
import { posts } from "../../data/posts"

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-gray-600 mb-12">
        Read all available posts below.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
