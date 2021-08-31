import Head from "next/head";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getBlogs } from "../../api/Blog";
import BlogItem from "../../components/BlogItem";
import Delayed from "../../components/Delayed";
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
      <h1 className="lg:mx-16 md:mx-4 sm:mx-2 text-lg">
        You can visit my Medium account{" "}
        <a
          href="https://osamaakb.medium.com/"
          className="text-black underline font-bold"
        >
          here
        </a>{" "}
        For better reading experience
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:mx-12 md:mx-4 sm:mx-2">
        {blogsQuery.isSuccess &&
          blogsQuery.data.items.map((blog: any, blogIdx: number) => (
            <Delayed waitBeforeShow={200 * blogIdx}>
              <BlogItem {...blog} key={blogIdx} />
            </Delayed>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
