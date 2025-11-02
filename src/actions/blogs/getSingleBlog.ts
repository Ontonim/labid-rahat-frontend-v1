"use server";

export interface CommentProps {
  _id: string;
  name: string;
  email: string;
  comment: string;
  blogId: string;
  timestamp: string;
  status: string;
  approved: boolean;
  isdeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface SingleBlog {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  source: string;
  status: string;
  author: string;
  authorModel: string;
  updatedAt: string;
  comments: CommentProps[];
}

interface BlogsResponse {
  success: boolean;
  data: SingleBlog;
}

export async function getSingleBlog(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["singleBlog"],
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BlogsResponse = await response.json();

    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
