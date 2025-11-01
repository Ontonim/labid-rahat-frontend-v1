import Background from "@/components/common/Background";
import BlogPage from "@/components/features/public/Blogs/Blogs";
import React from "react";
export const metadata = {
  title: "Labid Rahat | Blogs",
  description:
    "Stay informed with insightful articles, emerging trends, and expert opinions on technology, geopolitics, and global affairs",
  icons: {
    icon: "../../../../public/logo/logo.png",
  },
};

const Blogs = () => {
  return (
    <div className="relative z-10">
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
      <BlogPage />
    </div>
  );
};

export default Blogs;
