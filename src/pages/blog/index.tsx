import Head from "next/head";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getBlogs } from "../../api/Blog";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const blogsQuery = useQuery("blog", getBlogs);

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar black />
      <div className="flex flex-wrap justify-center">
        {blogsQuery.isSuccess &&
          blogsQuery.data.items.map((blog: any, blogIdx: number) => (
            <BlogItem {...blog} key={blogIdx} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
