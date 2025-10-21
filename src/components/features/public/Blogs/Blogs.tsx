import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Background from "@/components/common/Background";
import Image from "next/image";

const BLOG_POSTS = [
  {
    id: "1",
    title: "How Geography Shapes Global Politics",
    excerpt:
      "A deep exploration of how mountains, rivers, and borders influence international relations and power dynamics.",
    date: "OCT 15 2025",
    category: "Geopolitics",
    source: "World Affairs",
    readTime: "8 min read",
    image:
      "https://www.natstrat.org/upload/news/1680100562PS_Raghavan_(2nd_pic)_800x400.jpg",
  },
  {
    id: "2",
    title: "The Rise and Fall of Ancient Civilizations",
    excerpt:
      "Understanding how geography, culture, and resources contributed to the success and collapse of ancient empires.",
    date: "OCT 12 2025",
    category: "History",
    source: "History Chronicles",
    readTime: "10 min read",
    image:
      "https://www.gamespot.com/a/uploads/screen_kubrick/gamespot/images/2006/156/reviews/737707-926516_20060606_001.jpg",
  },
  {
    id: "3",
    title: "Strategic Importance of the Indian Ocean",
    excerpt:
      "Why this ocean is one of the most contested regions in modern geopolitics and global trade.",
    date: "OCT 10 2025",
    category: "Geography",
    source: "Geo Insights",
    readTime: "7 min read",
    image:
      "https://carnegie-production-assets.s3.amazonaws.com/static/media/images/list-IndianOceanMap_8b9ac827-6ecf-4b3b-b1b0-31f380586e12-3.jpg",
  },
  {
    id: "4",
    title: "How Borders Are Created and Disputed",
    excerpt:
      "A look into the historical events and geographic factors that shape national boundaries and conflicts.",
    date: "OCT 8 2025",
    category: "Geopolitics",
    source: "Boundary Watch",
    readTime: "9 min read",
    image:
      "https://interactive.aljazeera.com/aje/2020/mapping-india-and-china-disputed-borders/jpg/main.jpg",
  },
  {
    id: "5",
    title: "Silk Road: The Ancient Global Trade Network",
    excerpt:
      "Exploring how the Silk Road connected continents and influenced culture, economy, and politics for centuries.",
    date: "OCT 5 2025",
    category: "History",
    source: "Global History Weekly",
    readTime: "12 min read",
    image:
      "https://cdn.kastatic.org/ka-perseus-images/6d874ee12f4b6e3d05c84d0e2474e7b632706d8e.jpg",
  },
  {
    id: "6",
    title: "Why Geography Matters in Modern Warfare",
    excerpt:
      "Analyzing how terrain, climate, and location affect military strategy and defense planning.",
    date: "OCT 1 2025",
    category: "Geostrategy",
    source: "Defense Insights",
    readTime: "11 min read",
    image: "https://ichef.bbci.co.uk/images/ic/976x549/p09m6v18.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen relative z-10">
      <Background />
      {/* Hero Section */}
      <section className="relative pt-20 px-4 overflow-hidden mt-16">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
                Knowledge Hub
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Explore & Discover
            </h1>
            <p className="text-base lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with insightful articles, emerging trends, and
              expert opinions on technology, geopolitics, and global affairs
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    width={500}
                    height={500}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-lg shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      {post.source}
                    </span>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
