"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function BlogCard({ post, onHover }: BlogCardProps) {
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => onHover(post.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-[#02590F]/30 transition duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            width={500}
            height={500}
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-[#02590F] bg-[#02590F]/10 px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#02590F] transition duration-300">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs font-medium text-muted-foreground">
              {post.source}
            </span>
            <ArrowRight className="w-4 h-4 text-[#02590F] group-hover:translate-x-1 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
