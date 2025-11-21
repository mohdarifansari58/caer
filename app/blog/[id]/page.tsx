import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";
import LoadingFallback from "../../components/ui/LoadingFallback";
import { PATHS } from "../../config/paths";

// Mock blog data
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    image: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
  }
> = {
  "1": {
    title: "Getting Started with Next.js 16",
    content: `
      Next.js 16 brings powerful new features for building modern web applications. 
      In this comprehensive guide, we'll explore the latest improvements and best practices.

      ## Why Next.js?

      Next.js provides a robust framework for building React applications with built-in support for:
      - Server-side rendering (SSR)
      - Static site generation (SSG)
      - API routes
      - Dynamic routing
      - Image optimization
      - Automatic code splitting

      ## Getting Started

      To create a new Next.js project, use the following command:
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      ## Key Features in Next.js 16

      1. **Improved Performance**: Faster builds and better runtime performance
      2. **Enhanced Developer Experience**: Better error messages and debugging
      3. **New Routing System**: More flexible and intuitive routing
      4. **Better TypeScript Support**: Improved type checking and inference

      Start building amazing applications today!
    `,
    image: "/next.svg",
    date: "Nov 20, 2025",
    author: "John Developer",
    category: "Tutorial",
    readTime: "5 min read",
  },
  "2": {
    title: "Mastering Tailwind CSS",
    content: `
      Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML.

      ## What is Tailwind CSS?

      Tailwind CSS provides low-level utility classes that let you build custom designs without writing CSS.
      It's highly customizable and works great with component-based frameworks like React.

      ## Core Concepts

      - **Utility Classes**: Small, single-purpose classes
      - **Responsive Design**: Mobile-first approach with breakpoints
      - **Dark Mode**: Built-in dark mode support
      - **Customization**: Easily customize colors, spacing, and more

      ## Best Practices

      1. Use semantic class names
      2. Leverage the configuration file
      3. Create reusable components
      4. Use the Tailwind CSS IntelliSense extension

      Master Tailwind CSS and create beautiful interfaces!
    `,
    image: "/window.svg",
    date: "Nov 18, 2025",
    author: "Jane Designer",
    category: "Design",
    readTime: "7 min read",
  },
  "3": {
    title: "Dynamic Routing in Next.js",
    content: `
      Dynamic routing is a powerful feature in Next.js that allows you to create pages with dynamic paths.

      ## Understanding Dynamic Routes

      Dynamic routes in Next.js are created using square brackets in the file name.
      For example, \`[id].tsx\` creates a dynamic route that matches any path segment.

      ## Creating Dynamic Routes

      1. Create a file with square brackets: \`[id].tsx\`
      2. Access the dynamic parameter using \`useRouter\` or \`params\`
      3. Fetch data based on the parameter
      4. Render the page with the fetched data

      ## Advanced Patterns

      - Catch-all routes: \`[...slug].tsx\`
      - Optional catch-all: \`[[...slug]].tsx\`
      - Multiple dynamic segments: \`[category]/[id].tsx\`

      Dynamic routing enables you to build scalable applications!
    `,
    image: "/globe.svg",
    date: "Nov 15, 2025",
    author: "Mike Developer",
    category: "Development",
    readTime: "6 min read",
  },
};

async function BlogContent({ id }: { id: string }) {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 300));

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Post not found
        </h2>
        <Link
          href={PATHS.BLOG}
          className="text-[#696FC7] hover:text-[#84994F] font-semibold"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <span className="px-4 py-2 bg-[#FFDBB6] text-gray-800 rounded-full text-sm font-semibold">
            {post.category}
          </span>
          <span className="text-gray-600 text-sm">{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-[#84994F] mb-6">
          {post.title}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 text-gray-600 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{post.author}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 pt-8">
        <Link
          href={PATHS.BLOG}
          className="inline-flex items-center gap-2 text-[#696FC7] hover:text-[#84994F] font-semibold transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = params as unknown as { id: string };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<LoadingFallback />}>
          <BlogContent id={id} />
        </Suspense>
      </div>
    </main>
  );
}
