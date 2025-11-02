"use client";
import React from "react";
import { ArrowRight, Calendar, Clock, Loader2 } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { useInfiniteBlogs } from "@/hooks/blogs/useBlogs";
import Link from "next/link";

export default function BlogPage() {
  const { blogs, loading, error, hasMore, observerRef } = useInfiniteBlogs(2);

  if (error && blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 font-semibold">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={`${blog._id}`} href={`/blogs/${blog._id}`}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100">
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <Image
                      width={500}
                      height={500}
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-emerald-700 text-xs font-bold rounded-lg shadow-lg">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">
                        {blog.source}
                      </span>
                      <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {hasMore && !loading && (
            <div
              ref={observerRef}
              className="h-20 flex items-center justify-center"
            >
              <div className="w-8 h-8 border-2 border-emerald-200 border-t-emerald-700 rounded-full animate-spin"></div>
            </div>
          )}

          {!hasMore && blogs.length > 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-slate-600 font-medium">
                <span>🎉</span>
                <span>You&apos;ve reached the end!</span>
              </div>
            </div>
          )}

          {loading && blogs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-emerald-700 mb-4" />
              <p className="text-slate-600 font-medium">Loading blogs...</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
