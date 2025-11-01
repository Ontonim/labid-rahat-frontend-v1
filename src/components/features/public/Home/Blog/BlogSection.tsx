"use client";
import React from "react";
import { ArrowRight, Calendar, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useInfiniteBlogs } from "@/hooks/blogs/useBlogs";
import { formatDate } from "@/utils/formatDate";

export default function BlogSection() {
  const { blogs } = useInfiniteBlogs(10);
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <Link href={`/blogs/${blogs[0]?._id}`}>
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={blogs[0]?.image || "/images/placeholder.jpg"}
                    alt={blogs[0]?.title || "Labid Rahat blogs"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-emerald-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-4 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg">
                        {blogs[0]?.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blogs[0]?.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{blogs[0]?.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                      {blogs[0]?.title}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      {blogs[0]?.excerpt}
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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogs.slice(1, 3).map((post) => (
            <Link key={post._id} href={`/blogs/${post._id}`}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-slate-100">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={post.image || "/images/placeholder.jpg"}
                    alt={post.title || "Labid Rahat Blogs"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-lg shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.date)}</span>
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
            {blogs.slice(3, 6).map((post) => (
              <Link key={post._id} href={`/blogs/${post._id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-100">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={post.image || "/images/placeholder.jpg"}
                      alt={post.title || "Labid Rahat Blogs"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-md">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
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
