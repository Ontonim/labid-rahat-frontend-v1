"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import Background from "@/components/common/Background";

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
    title: "The Future of Sustainable Technology in 2025",
    excerpt:
      "Exploring how emerging technologies are reshaping our approach to environmental sustainability and creating a greener future.",
    date: "OCT 15 2025",
    category: "Technology",
    source: "Tech Insights",
    image: "/sustainable-tech-innovation.png",
  },
  {
    id: "2",
    title: "Building Scalable Applications with Modern Frameworks",
    excerpt:
      "A deep dive into best practices for architecting applications that can grow with your business needs.",
    date: "OCT 12 2025",
    category: "Development",
    source: "Dev Weekly",
    image: "/modern-web-development.png",
  },
  {
    id: "3",
    title: "The Rise of AI-Powered Design Tools",
    excerpt:
      "How artificial intelligence is transforming the design process and empowering creators to work more efficiently.",
    date: "OCT 10 2025",
    category: "Design",
    source: "Design Today",
    image: "/ai-design-tools.png",
  },
  {
    id: "4",
    title: "Understanding Web Performance Optimization",
    excerpt:
      "Essential techniques to improve your website speed and deliver better user experiences across all devices.",
    date: "OCT 8 2025",
    category: "Performance",
    source: "Web Masters",
    image: "/web-performance-optimization.png",
  },
];

export default function BlogSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden bg-white">
      <Background />
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Latest Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay updated with our latest articles, insights, blog and industry trends
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#02590F]/20 to-[#02590F]/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-card rounded-lg overflow-hidden border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full min-h-96 overflow-hidden">
                  <img
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
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition duration-300 group">
            View All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
