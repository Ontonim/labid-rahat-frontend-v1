"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import Link from "next/link";
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

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How Geography Shapes Global Politics",
    excerpt:
      "Exploring how mountains, seas, and borders influence alliances, conflicts, and power dynamics in world politics.",
    date: "OCT 15 2025",
    category: "Geopolitics",
    source: "World Affairs",
    image:
      "https://www.opengeography.org/uploads/1/7/4/1/17412073/_605067722.jpg",
  },
  {
    id: "2",
    title: "The Rise and Fall of Great Empires",
    excerpt:
      "A deep dive into how geography, resources, culture, and leadership shaped the success and collapse of ancient civilizations.",
    date: "OCT 12 2025",
    category: "History",
    source: "History Chronicles",
    image:
      "https://www.worldhistory.org/img/r/p/1000x1200/14114.jpg.webp?v=1732552203",
  },
  {
    id: "3",
    title: "Why the Indian Ocean is a Geopolitical Hotspot",
    excerpt:
      "Understanding the strategic importance of the Indian Ocean and why global powers compete for control over this region.",
    date: "OCT 10 2025",
    category: "Geography",
    source: "Geo Insights",
    image:
      "https://thegeopolitics.com/wp-content/uploads/2021/03/Indian-Navy-flotilla-of-Western-Fleet-escort-INS-Vikramaditya-and-INS-Viraat.jpg",
  },
  {
    id: "4",
    title: "Border Conflicts: How History Still Shapes Today’s Maps",
    excerpt:
      "Essential historical events that define modern borders and why territorial disputes continue across the world.",
    date: "OCT 8 2025",
    category: "Geopolitics",
    source: "Global Perspective",
    image:
      "https://assets.thehansindia.com/h-upload/feeds/images/1085689-borders.jpg",
  },
];

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Latest Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay updated with our latest articles, insights, blog and industry
            trends
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={"/blogs/ancient-civilizations-impact"}>
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#02590F]/20 to-[#02590F]/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-card rounded-lg overflow-hidden border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full min-h-96 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={BLOG_POSTS[0].image || "/placeholder.svg"}
                      alt={BLOG_POSTS[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-[#02590F] bg-[#02590F]/10 px-3 py-1 rounded-full">
                          {BLOG_POSTS[0].category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {BLOG_POSTS[0].date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                        {BLOG_POSTS[0].title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {BLOG_POSTS[0].excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {BLOG_POSTS[0].source}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#02590F] group-hover:translate-x-2 transition duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(1).map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              isHovered={hoveredId === post.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href={"/article"}>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition duration-300 group cursor-pointer">
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
