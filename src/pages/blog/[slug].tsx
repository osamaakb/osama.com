import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { BlogItemProps } from "../../types/BlogItem";

// add zustand as a global state management tool
const BlogDetails: React.FC<BlogItemProps> = ({
  thumbnail,
  content,
  title,
}) => {
  const router = useRouter();

  return (
    <div>
      <Navbar black />
      <h1>{title}</h1>
    </div>
  );
};

export default BlogDetails;
