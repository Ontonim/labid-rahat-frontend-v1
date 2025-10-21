"use client";
import React, { useState } from "react";

const Comment = () => {
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
                    <h4 className="font-bold text-slate-900">{comment.name}</h4>
                    {/* <p className="text-sm text-slate-500">{comment.email}</p> */}
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
  );
};

export default Comment;
