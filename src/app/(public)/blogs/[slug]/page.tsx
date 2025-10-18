"use client";

import type React from "react";

import { useState } from "react";
import { ArrowLeft, Calendar, User, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  source: string;
  image: string;
  author: string;
  readTime: string;
}

interface Comment {
  id: string;
  name: string;
  email: string;
  comment: string;
  timestamp: string;
}

const BLOG_POSTS: Record<string, BlogPost> = {
  "ancient-civilizations-impact": {
    id: "1",
    title: "How Ancient Civilizations Shaped the Modern World",
    excerpt:
      "A journey through the contributions of ancient civilizations and how their innovations still influence our lives today.",
    content: `Ancient civilizations laid the foundation for the world we live in today. From government systems to architecture and mathematics, their contributions continue to shape modern society. The ancient Egyptians developed one of the earliest writing systems and engineered monumental structures like the pyramids using remarkable precision. Their advancements in medicine and agriculture helped sustain complex societies. Meanwhile, ancient Mesopotamia introduced the first forms of law and urban planning. The Code of Hammurabi is one of the oldest legal texts in history, emphasizing justice and social order. Ancient Greece became the birthplace of democracy, philosophy, and theater. Thinkers like Socrates, Plato, and Aristotle questioned the nature of existence and knowledge, influencing education and ethics for centuries. Rome expanded upon Greek ideas and built vast infrastructure including roads, aqueducts, and advanced governance models. The Roman legal system still influences legal frameworks around the world. The legacy of these civilizations lives on in modern languages, cultural practices, political systems, and scientific thought. Their innovations remind us that the past is deeply woven into the present. Among the so-called “Five Good Emperors,” Hadrian (r. 117–138) is particularly noted for consolidating the empire’s frontiers and embarking on ambitious building projects throughout the provinces[34]. In Judaea, which had long been the center of Jewish national and religious life, his reign marked a decisive turning point. After earlier Jewish resistance to Roman rule, Hadrian visited the region in 129/130 CE and refounded Jerusalem as the Roman colony Aelia Capitolina, naming it after his family (Aelius) and the Capitoline Triad.[35] The refoundation overlaid the destroyed Jewish city with a new Roman urban plan of cardines and decumani, forums, and monumental gates, and included the construction of a Temple to Jupiter on the site of the former Jewish Temple[36]. Later tradition and archaeological evidence also indicate a Temple of Venus near the site of the Holy Sepulchre[37].

Hadrian’s measures, combined with restrictions on Jewish practices, helped spark the Bar Kokhba Revolt (132–135 CE). After crushing the uprising, Roman forces expelled most Jews from Jerusalem, barring their entry except on certain days, and rebuilt the city as a statement of imperial power and domination.[34] Most scholars consider Hadrianic Aelia to have been unwalled, with free-standing gate complexes (such as the northern gate beneath today’s Damascus Gate) rather than a continuous defensive circuit.[38] `,
    date: "OCT 15 2025",
    category: "History",
    source: "Historical Insights",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbA880LDRJamaTuZvfyZqJIkWsWia4JPjxcB6vY2MBQP77Ruj4ICDfdh0qqdgyjhgUeP7HU9gXwVdTW7V-A9N18PqNdOLZk7X6M8Ijxe2cfNyYgY70cZYSfODfSNQfInF2OyDFMwhGxfGR-z9aZ7zydfUBCL-sZEbU-JnKQW9VFOXXKs3LXBYZ2TlLTdE/s6000/constantinos-kollias-yqBvJJ8jGBQ-unsplash.jpg",
    author: "Sarah Johnson",
    readTime: "7 min read",
  },
  "geography-shaping-nations": {
    id: "2",
    title: "How Geography Influences Culture and Development",
    excerpt:
      "Understanding how location, resources, and terrain affect the growth of civilizations and modern nations.",
    content: `Geography plays a vital role in shaping societies, cultures, and economies. The physical environment determines how people live, what resources they rely on, and how they interact with neighboring regions.

Rivers such as the Nile, Tigris, and Euphrates supported early agricultural civilizations by providing fertile land and water. Cities often developed near waterways, enabling trade and transportation.

Mountain ranges like the Himalayas have acted as natural barriers, protecting regions from invasion but also limiting cultural exchange. Meanwhile, open plains allowed for expansion and migration, leading to the formation of large empires.

Climate also influences lifestyle and development. In temperate regions, predictable seasons allowed for stable farming, while harsh deserts or tundras required unique survival strategies. As a result, cultures adapted their architecture, diet, and traditions to their environment.

Access to natural resources often determined economic power. Countries rich in minerals, fertile land, or coastal access thrived in trade and industry. Conversely, landlocked or resource-poor regions sometimes struggled to develop without external support.

In the modern world, geography still affects politics, trade routes, and environmental challenges. From global supply chains to climate change, understanding geography is essential to understanding how nations grow and interact.`,
    date: "OCT 12 2025",
    category: "Geography",
    source: "Geo Discover",
    image: "/geography-culture-development.png",
    author: "Michael Chen",
    readTime: "9 min read",
  },
};

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS[params.slug];
  const [comments, setComments] = useState<Comment[]>([
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
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
      setComments((prev) => [newComment, ...prev]);
      setFormData({ name: "", email: "", comment: "" });
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 500);
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Post not found
          </h1>
          <Link href="/blog" className="text-[#02590F] hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#02590F] hover:text-[#02590F]/80 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to articles
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-[#02590F] bg-[#02590F]/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{comments.length} comments</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <Image
              width={500}
              height={500}
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-16">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border my-12" />

          {/* Comments Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Comments ({comments.length})
            </h2>

            {/* Comment Form */}
            <div className="bg-card border border-border rounded-lg px-4 py-8 mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Leave a comment
              </h3>
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#02590F]/50"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#02590F]/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Share your thoughts..."
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#02590F]/50 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#02590F] text-white rounded-lg font-semibold hover:bg-[#02590F]/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Posting..." : "Post Comment"}
                </button>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mt-4 p-4 bg-[#02590F]/10 border border-[#02590F]/30 rounded-lg text-[#02590F] animate-fade-in">
                  ✓ Your comment has been posted successfully!
                </div>
              )}
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-card border border-border rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {comment.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {comment.email}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {comment.timestamp}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comment.comment}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
