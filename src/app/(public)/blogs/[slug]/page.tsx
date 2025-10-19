"use client";
import React, { useState } from "react";
import { ArrowLeft, MessageCircle, Clock, Share2 } from "lucide-react";
import Background from "@/components/common/Background";
import Link from "next/link";
import Image from "next/image";

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
  const [comments, setComments] = useState([
    {
      id: "1",
      name: "Alex Thompson",
      email: "alex@example.com",
      comment:
        "Great article! Really helped me understand the concepts better.",
      timestamp: "2 days ago",
    },
    {
      id: "2",
      name: "Emma Wilson",
      email: "emma@example.com",
      comment:
        "This is exactly what I was looking for. Thanks for the detailed explanation!",
      timestamp: "1 day ago",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  interface FormData {
    name: string;
    email: string;
    comment: string;
  }

  interface Comment {
    id: string;
    name: string;
    email: string;
    comment: string;
    timestamp: string;
  }

  type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const handleInputChange = (e: InputEvent) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value } as FormData));
  };

  const handleSubmitComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newComment: Comment = {
        id: String(comments.length + 1),
        name: formData.name,
        email: formData.email,
        comment: formData.comment,
        timestamp: "just now",
      };
      setComments((prev: Comment[]) => [newComment, ...prev]);
      setFormData({ name: "", email: "", comment: "" } as FormData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 500);
  };

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
            <div className="flex items-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length} comments</span>
            </div>
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
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Comments</h2>
            <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
              {comments.length}
            </span>
          </div>

          {/* Comment Form */}
          <div className="bg-white border border-slate-200 rounded-2xl py-8 px-4 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Join the Discussion
            </h3>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Comment
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Share your thoughts..."
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
                />
              </div>
              <button
                onClick={handleSubmitComment}
                disabled={
                  isSubmitting ||
                  !formData.name ||
                  !formData.email ||
                  !formData.comment
                }
                className="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Posting..." : "Post Comment"}
              </button>
            </div>

            {submitSuccess && (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center gap-3">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <span className="font-medium">
                  Your comment has been posted successfully!
                </span>
              </div>
            )}
          </div>

          {/* Comments List */}
          <div className="space-y-6 pb-16">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {comment.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {comment.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {comment.email}
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed mt-3">
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
