import { Suspense } from "react";
import BlogCard from "../components/BlogCard";
import LoadingFallback from "../components/ui/LoadingFallback";
import Blog1 from "@/assets/blog1.jpg";
import Blog2 from "@/assets/blog2.jpg";
import Blog3 from "@/assets/blog3.jpg";
import Blog4 from "@/assets/blog4.jpg";
import Blog5 from "@/assets/blog5.jpg";
import Blog6 from "@/assets/blog6.jpg";

// Mock blog data
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 16",
    excerpt:
      "Learn the basics of Next.js and build your first application with modern React features.",
    image: Blog1,
    date: "Nov 20, 2025",
    category: "Tutorial",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive designs with Tailwind CSS utility classes.",
    image: Blog2,
    date: "Nov 18, 2025",
    category: "Design",
  },
  {
    id: "3",
    title: "Dynamic Routing in Next.js",
    excerpt:
      "Explore advanced routing patterns and create dynamic pages with custom paths.",
    image: Blog3,
    date: "Nov 15, 2025",
    category: "Development",
  },
  {
    id: "4",
    title: "Performance Optimization Tips",
    excerpt:
      "Improve your app performance with lazy loading, code splitting, and image optimization.",
    image: Blog4,
    date: "Nov 12, 2025",
    category: "Performance",
  },
  {
    id: "5",
    title: "React Suspense Deep Dive",
    excerpt:
      "Understand React Suspense and how to implement loading states in your applications.",
    image: Blog5,
    date: "Nov 10, 2025",
    category: "React",
  },
  {
    id: "6",
    title: "TypeScript Best Practices",
    excerpt:
      "Write type-safe code and avoid common TypeScript pitfalls in your projects.",
    image: Blog6,
    date: "Nov 8, 2025",
    category: "TypeScript",
  },
];

async function BlogContent() {
  // Simulate data fetching delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#84994F] mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600">
            Explore articles about web development, design, and modern
            technologies.
          </p>
        </div>

        {/* Blog Grid with Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <BlogContent />
        </Suspense>
      </div>
    </main>
  );
}
