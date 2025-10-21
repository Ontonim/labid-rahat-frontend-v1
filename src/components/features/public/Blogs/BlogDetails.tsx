import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Background from "@/components/common/Background";
import Link from "next/link";
import Image from "next/image";
import Comment from "./Comment";

const blogPost = {
  id: "1",
  title: "How Ancient Civilizations Shaped the Modern World",
  excerpt:
    "A journey through the contributions of ancient civilizations and how their innovations still influence our lives today.",
  content: `Ancient civilizations laid the foundation for the world we live in today. From government systems to architecture and mathematics, their contributions continue to shape modern society. The ancient Egyptians developed one of the earliest writing systems and engineered monumental structures like the pyramids using remarkable precision. Their advancements in medicine and agriculture helped sustain complex societies. Meanwhile, ancient Mesopotamia introduced the first forms of law and urban planning. The Code of Hammurabi is one of the oldest legal texts in history, emphasizing justice and social order. Ancient Greece became the birthplace of democracy, philosophy, and theater. Thinkers like Socrates, Plato, and Aristotle questioned the nature of existence and knowledge, influencing education and ethics for centuries. Rome expanded upon Greek ideas and built vast infrastructure including roads, aqueducts, and advanced governance models. The Roman legal system still influences legal frameworks around the world. The legacy of these civilizations lives on in modern languages, cultural practices, political systems, and scientific thought. Their innovations remind us that the past is deeply woven into the present. Among the so-called "Five Good Emperors," Hadrian (r. 117–138) is particularly noted for consolidating the empire's frontiers and embarking on ambitious building projects throughout the provinces. In Judaea, which had long been the center of Jewish national and religious life, his reign marked a decisive turning point.`,
  date: "OCT 15 2025",
  category: "History",
  source: "Historical Insights",
  image:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbA880LDRJamaTuZvfyZqJIkWsWia4JPjxcB6vY2MBQP77Ruj4ICDfdh0qqdgyjhgUeP7HU9gXwVdTW7V-A9N18PqNdOLZk7X6M8Ijxe2cfNyYgY70cZYSfODfSNQfInF2OyDFMwhGxfGR-z9aZ7zydfUBCL-sZEbU-JnKQW9VFOXXKs3LXBYZ2TlLTdE/s6000/constantinos-kollias-yqBvJJ8jGBQ-unsplash.jpg",
  author: "Sarah Johnson",
  readTime: "7 min read",
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen relative z-10">
      <Background />
      <div className="relative">
        <div className="container mx-auto px-4 pt-20 lg:pt-30 mb-16 flex items-center justify-between">
          <Link href={"/blogs"}>
            <button className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors font-medium cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </Link>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Share2 className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
      <article className="container mx-auto px-4 relative">
        {/* Header */}
        <header className="mb-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full">
              {blogPost.category}
            </span>
            <span className="text-sm text-slate-500 font-medium">
              {blogPost.date}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                {blogPost.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {blogPost.author}
                </p>
                <p className="text-xs text-slate-500">{blogPost.source}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
            {/* <div className="flex items-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length} comments</span>
            </div> */}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            width={500}
            height={500}
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-16">
          {blogPost.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-slate-700 leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Comments Section */}
        <Comment />
      </article>
    </div>
  );
}
