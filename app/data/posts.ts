export type Post = {
  id: string
  title: string
  description: string
  content: string
  date: string
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    description: "A beginner-friendly introduction to Next.js and why it’s awesome.",
    content: `
      Next.js is a powerful React framework for building fast, modern web apps.
      In this post, we’ll go over the basics of how Next.js works and why you should use it.
    `,
    date: "2025-09-01",
  },
  {
    id: "2",
    title: "Understanding Dynamic Routes in Next.js",
    description: "Learn how to use dynamic routing to build flexible apps.",
    content: `
      Dynamic routes allow you to create pages that adapt to the content.
      For example, /blog/[id] can show different posts depending on the URL.
    `,
    date: "2025-09-05",
  },
  {
    id: "3",
    title: "Styling Next.js Apps with Tailwind",
    description: "Make your Next.js apps look clean and modern with Tailwind CSS.",
    content: `
      Tailwind CSS is a utility-first framework that works beautifully with Next.js.
      In this post, we’ll set up Tailwind and build a professional layout.
    `,
    date: "2025-09-10",
  },
  {
    id: "4",
    title: "Optimizing Images in Next.js",
    description: "Boost performance with Next.js Image Optimization.",
    content: `
      Next.js provides a built-in Image component that automatically optimizes your images.
      This improves performance and SEO by serving the right size and format.
    `,
    date: "2025-09-12",
  },
  {
    id: "5",
    title: "Deploying Next.js Apps to Vercel",
    description: "How to easily deploy your Next.js app using Vercel.",
    content: `
      Vercel is the official hosting platform for Next.js. In this post, we'll walk through
      deploying your project live in just a few minutes.
    `,
    date: "2025-09-14",
  },
  {
    id: "6",
    title: "Fetching Data in Next.js",
    description: "Learn how to fetch data with async/await inside Next.js components.",
    content: `
      Next.js supports both server-side and client-side data fetching. We'll explore
      when to use each method and how to set them up properly.
    `,
    date: "2025-09-15",
  },
  {
    id: "7",
    title: "SEO Best Practices with Next.js",
    description: "Improve your site’s visibility with proper metadata and SEO techniques.",
    content: `
      SEO is crucial for modern web apps. With Next.js metadata configuration,
      you can control how your pages appear on search engines and social media.
    `,
    date: "2025-09-16",
  },
]
