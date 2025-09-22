// app/blog/[id]/page.tsx
import { posts } from "../../../data/posts"
import { notFound } from "next/navigation"

interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-lg max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <p className="text-lg text-gray-700">{post.description}</p>
      <div className="mt-8 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </article>
  )
}
