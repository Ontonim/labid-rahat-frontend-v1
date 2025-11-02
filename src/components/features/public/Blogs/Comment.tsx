import { CommentProps } from "@/actions/blogs/getSingleBlog";
import CommentForm from "./CommentForm";
const Comment = ({
  comments,
  blogId,
}: {
  comments: CommentProps[];
  blogId: string;
}) => {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Comments</h2>
        <span className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full">
          {comments?.length}
        </span>
      </div>
      <CommentForm blogId={blogId} />
      <div className="space-y-6 pb-16">
        {comments &&
          comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {comment?.name?.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900">
                        {comment?.name}
                      </h4>
                      {/* <p className="text-sm text-slate-500">{comment.email}</p> */}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {comment?.timestamp}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mt-3">
                    {comment?.comment}
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
