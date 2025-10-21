import BlogPage from "@/components/features/public/Blogs/Blogs";
import React from "react";
export const metadata = {
  title: "Labid Rahat | Blogs",
  description: "A",
  icons: {
    icon: "../../../../public/logo/logo.png",
  },
};

const Blogs = () => {
  return (
    <div>
      <BlogPage />
    </div>
  );
};

export default Blogs;
