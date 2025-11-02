// import { getSingleBlog } from "@/actions/blogs/getSingleBlog";
// import BlogDetailPage from "@/components/features/public/Blogs/BlogDetails";
// import type { Metadata } from "next";
// import { Suspense } from "react";

// interface BlogDetailsProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({
//   params,
// }: BlogDetailsProps): Promise<Metadata> {
//   const blogId = await params.slug;
//   const blog = await getSingleBlog(blogId);

//   if (!blog) {
//     return {
//       title: "Blog not found | Labid Rahat",
//       description: "The requested blog could not be found.",
//     };
//   }

//   return {
//     title: `${blog?.data?.title} | Labid Rahat Blogs`,
//     description: blog?.data?.excerpt || blog?.data?.content.slice(0, 150),
//     openGraph: {
//       title: blog?.data?.title,
//       description: blog?.data?.excerpt,
//       images: [
//         {
//           url: blog?.data?.image,
//           alt: blog?.data?.title,
//         },
//       ],
//     },
//   };
// }

// export default async function BlogDetails({ params }: BlogDetailsProps) {
//   const blog = await getSingleBlog(params.slug);

//   if (!blog) {
//     return (
//       <div className="text-center py-10 text-gray-500">Blog not found</div>
//     );
//   }

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <BlogDetailPage blog={blog} />
//     </Suspense>
//   );
// }


import { getSingleBlog } from "@/actions/blogs/getSingleBlog";
import BlogDetailPage from "@/components/features/public/Blogs/BlogDetails";
import type { Metadata } from "next";
import { Suspense } from "react";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const blogId = (await params).slug;
  const blog = await getSingleBlog(blogId);
  
  if (!blog.success || !blog.data) {
    return {
      title: "Blog not found | Labid Rahat",
      description: "The requested blog could not be found.",
    };
  }
  
  return {
    title: `${blog.data.title} | Labid Rahat Blogs`,
    description: blog.data.excerpt || blog.data.content.slice(0, 150),
    openGraph: {
      title: blog.data.title,
      description: blog.data.excerpt,
      images: [
        {
          url: blog.data.image,
          alt: blog.data.title,
        },
      ],
    },
  };
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const resolvedParams = await params;
  const blog = await getSingleBlog(resolvedParams.slug);
  
  if (!blog.success || !blog.data) {
    return (
      <div className="text-center py-10 text-gray-500">Blog not found</div>
    );
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetailPage blog={blog.data} />
    </Suspense>
  );
}