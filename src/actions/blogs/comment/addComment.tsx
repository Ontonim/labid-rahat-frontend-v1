"use server";

import { z, ZodError } from "zod";
import { revalidateTag } from "next/cache";
const commentSchema = z.object({
  name: z.string().min(1, "Name is required").max(20, "Name is too long"),
  email: z.string().email("Invalid email address"),
  comment: z
    .string()
    .min(1, "Comment is required")
    .max(1000, "Comment is too long"),
  blogId: z.string().min(1, "Blog ID is required"),
});

export const addComment = async (formData: FormData) => {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const comment = formData.get("comment") as string | null;
  const blogId = formData.get("blogId") as string | null;

  try {
    const data = commentSchema.parse({
      name,
      email,
      comment,
      blogId,
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to add comment");
    }
    revalidateTag("singleBlog");
    const result = await res.json();
    console.log("Comment added:", result);

    return { success: true, message: "Comment added successfully", result };
  } catch (err) {
    if (err instanceof ZodError) {
      const errors = err.issues.map((issue) => issue.message).join(", ");
      console.error("Validation failed:", errors);
      return { success: false, message: errors };
    }
    if (err instanceof Error) {
      console.error("Error:", err.message);
      return { success: false, message: err.message };
    }
    console.error("Unknown error:", err);
    return { success: false, message: "An unexpected error occurred" };
  }
};
