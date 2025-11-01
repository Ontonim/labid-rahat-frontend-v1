"use client";

import { addComment } from "@/actions/blogs/comment/addComment";
import { useState, useTransition } from "react";

const CommentForm = ({ blogId }: { blogId: string }) => {
  const [isPending, startTransition] = useTransition();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    setErrorMessage(null);
    setSubmitSuccess(false);
    formData.append("blogId", blogId);

    startTransition(async () => {
      const result = await addComment(formData);

      if (result.success) {
        setSubmitSuccess(true);
        setErrorMessage(null);
        (document.getElementById("comment-form") as HTMLFormElement)?.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setErrorMessage(result.message);
      }
    });
  };

  return (
    <div>
      <div className="bg-white border border-slate-200 rounded-2xl py-8 px-4 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-6">
          Join the Discussion
        </h3>
        <form id="comment-form" action={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                disabled={isPending}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                disabled={isPending}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Comment
            </label>
            <textarea
              name="comment"
              placeholder="Share your thoughts..."
              rows={5}
              required
              disabled={isPending}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Posting..." : "Post Comment"}
          </button>
        </form>

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

        {errorMessage && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 flex items-center gap-3">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              !
            </div>
            <span className="font-medium">{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
