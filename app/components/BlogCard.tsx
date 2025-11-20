import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  category,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold px-3 py-1 bg-[#FFDBB6] text-gray-800 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          <h3 className="text-xl font-bold text-[#84994F] mb-3 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4">{excerpt}</p>

          <div className="text-[#696FC7] font-semibold text-sm hover:text-[#84994F]">
            Read More →
          </div>
        </div>
      </article>
    </Link>
  );
}
