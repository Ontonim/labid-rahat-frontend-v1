import { ArrowLeft, Clock, Share2 } from "lucide-react";
import Background from "@/components/common/Background";
import Link from "next/link";
import Image from "next/image";
import Comment from "./Comment";
import { formatDate } from "@/utils/formatDate";
import { SingleBlog } from "@/actions/blogs/getSingleBlog";

export default function BlogDetailPage({ blog }: { blog: SingleBlog }) {
  const blogDetails = blog;
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
              {blogDetails.category}
            </span>
            <span className="text-sm text-slate-500 font-medium">
              {formatDate(blogDetails.date)}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {blogDetails.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                {blogDetails.authorModel.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {blogDetails.authorModel}
                </p>
                <p className="text-xs text-slate-500">{blogDetails.source}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>{blogDetails.readTime}</span>
            </div>
            {/* <div className="flex items-center gap-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length} comments</span>
            </div> */}
          </div>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            width={500}
            height={500}
            src={blogDetails.image}
            alt={blogDetails.title}
            className="w-full h-96 object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          {blogDetails.content
            .split("\n\n")
            .map((paragraph: string, index: number) => (
              <p
                key={index}
                className="text-lg text-slate-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
        </div>

        <Comment comments={blogDetails?.comments} blogId={blogDetails?._id} />
      </article>
    </div>
  );
}
