import Head from "next/head";
import React from "react";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { blogs } from "../../data/mockdata";

export interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar black />
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, blogIdx) => (
          <BlogItem {...blog} key={blogIdx} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
