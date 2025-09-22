export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-5">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About <span className="text-blue-600">Simple Blog</span>
      </h1>

      {/* Intro paragraph */}
      <p className="text-lg text-gray-600 max-w-3xl mb-12">
        This is a project I built to practice some basic concepts in NextJs. It’s all about learning, experimenting, and building stuffs.
      </p>

      {/* Two-column section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: image */}
        <img
          src="/about.webp"
          alt="About illustration"
          className="rounded-xl shadow-lg"
        />

        {/* Right: details */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why This Project?
          </h2>
          <p className="text-gray-600 mb-6">
            This blog app is a playground to explore Next.js concepts like file-based
            routing, layouts, dynamic routes, and metadata. It’s intentionally simple,
            yet powerful enough to showcase real-world patterns.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            The Goal
          </h2>
          <p className="text-gray-600">
            To learn in public, build a portfolio, and create something employers can
            recognize as practical, clean, and professional. 
          </p>
        </div>
      </div>
    </div>
  )
}
