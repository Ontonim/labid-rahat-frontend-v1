import React from "react";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FEATURED_POSTS = [
  {
    id: "1",
    title: "How Geography Shapes Global Politics",
    excerpt:
      "Exploring how mountains, rivers, and borders influence international relations and power dynamics in the modern world.",
    date: "OCT 15 2025",
    category: "Geopolitics",
    readTime: "8 min read",
    image:
      "https://www.natstrat.org/upload/news/1680100562PS_Raghavan_(2nd_pic)_800x400.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "The Rise and Fall of Ancient Civilizations",
    excerpt:
      "Understanding how geography, culture, and resources contributed to the success and collapse of ancient empires.",
    date: "OCT 12 2025",
    category: "History",
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
    readTime: "7 min read",
    image:
      "https://carnegie-production-assets.s3.amazonaws.com/static/media/images/list-IndianOceanMap_8b9ac827-6ecf-4b3b-b1b0-31f380586e12-3.jpg",
  },
];

const LATEST_POSTS = [
  {
    id: "4",
    title: "How Borders Are Created and Disputed",
    excerpt:
      "A look into the historical events and geographic factors that shape national boundaries.",
    date: "OCT 8 2025",
    category: "Geopolitics",
    readTime: "9 min read",
    image:
      "https://interactive.aljazeera.com/aje/2020/mapping-india-and-china-disputed-borders/jpg/main.jpg",
  },
  {
    id: "5",
    title: "Silk Road: Ancient Global Trade Network",
    excerpt:
      "How the Silk Road connected continents and influenced culture, economy, and politics.",
    date: "OCT 5 2025",
    category: "History",
    readTime: "12 min read",
    image:
      "https://cdn.kastatic.org/ka-perseus-images/6d874ee12f4b6e3d05c84d0e2474e7b632706d8e.jpg",
  },
  {
    id: "6",
    title: "Geography in Modern Warfare",
    excerpt:
      "How terrain, climate, and location affect military strategy and defense planning.",
    date: "OCT 1 2025",
    category: "Geostrategy",
    readTime: "11 min read",
    image: "https://ichef.bbci.co.uk/images/ic/976x549/p09m6v18.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
            <TrendingUp className="w-4 h-4" />
            Latest Insights
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Explore Our Blog
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dive into thought-provoking articles on history, geography, and
            global affairs
          </p>
        </div>

        {/* Featured Post (Large Card) */}
        <div className="mb-12">
          <Link href={`/blogs/${FEATURED_POSTS[0].id}`}>
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={FEATURED_POSTS[0].image}
                    alt={FEATURED_POSTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">
                        {FEATURED_POSTS[0].category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{FEATURED_POSTS[0].date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{FEATURED_POSTS[0].readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                      {FEATURED_POSTS[0].title}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      {FEATURED_POSTS[0].excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-lg group-hover:gap-4 transition-all">
                      Read Full Article
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Two Medium Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {FEATURED_POSTS.slice(1, 3).map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-lg shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm group-hover:gap-3 transition-all pt-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Latest Articles - Three Small Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">
              Latest Articles
            </h3>
            <button className="text-emerald-700 font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {LATEST_POSTS.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-100">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                      <span className="text-slate-300">•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={"/blogs"}>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer">
              Explore All Articles
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
