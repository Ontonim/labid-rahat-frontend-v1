import React from "react";
import Banner from "./Banner/Banner";
import BlogSection from "./Blog/BlogSection";
import Background from "@/components/common/Background";
import NewsletterCTA from "./NewsLetter/NewsLetter";
import { TrendingUp } from "lucide-react";

const Home = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden">
      <Background />
      <div className="relative">
        <Banner />
        <div>
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
          <BlogSection />
        </div>
        <NewsletterCTA />
      </div>
    </section>
  );
};

export default Home;
