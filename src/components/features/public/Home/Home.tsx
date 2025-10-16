import React from "react";
import Banner from "./Banner/Banner";
import BlogSection from "./Blog/BlogSection";
import CaseStudiesSection from "./CaseStudies/CaseStudiesSection";
import Background from "@/components/common/Background";
import NewsletterCTA from "./NewsLetter/NewsLetter";

const Home = () => {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[750px] lg:min-h-[900px] overflow-hidden">
      <Background />
      <div className="relative">
        <Banner />
        <BlogSection />
        <CaseStudiesSection />
        <NewsletterCTA />
      </div>
    </section>
  );
};

export default Home;
