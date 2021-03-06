import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { BlogProps } from "../../types/Blog";
import { useQuery } from "react-query";
import { getBlogs } from "../../api/Blog";
import reactHtmlParser from "react-html-parser";
import Footer from "../../components/Footer";
import PrevArrowIcon from "../../Icons/PrevArrowIcon";
import NextArrowIcon from "../../Icons/NextArrowIcon";
import Link from "next/link";

const BlogDetails: React.FC = () => {
  const router = useRouter();
  const blogTitle = router.query.slug;

  const initialBlogState: BlogProps = {
    title: "",
    thumbnail: "",
    content: "",
    link: "",
  };

  const [blog, setBlog] = useState<BlogProps>(initialBlogState);
  const [blogIdx, setBlogIdx] = useState<number>(0);

  const blogsQuery = useQuery("blog", getBlogs);

  useEffect(() => {
    if (blogsQuery.data?.items) {
      setBlogIdx(
        blogsQuery.data.items.indexOf(
          blogsQuery.data.items.find((blogItem: BlogProps) =>
            blogItem.title.startsWith(`${blogTitle}`)
          )
        )
      );
    }
  }, [blogsQuery.data, router.query.slug]);

  if (blogsQuery.isError) return <div>error loading blogs</div>;

  if (blogsQuery.isSuccess)
    return (
      <div>
        <Navbar black />
        <div className="lg:px-52 md:px-32 sm:px-8 px-8">
          <a href={blogsQuery.data.items[blogIdx].link} className="underline">
            Read on Medium
          </a>
          <h1 className="text-4xl py-4">
            {blogsQuery.data.items[blogIdx].title}
          </h1>
          <span className="text-xl leading-8 lg:text-justify md:text-justify sm:text-justify w-screen">
            {reactHtmlParser(blogsQuery.data.items[blogIdx].content)}
          </span>
        </div>
        <div className="flex items-center py-16">
          <hr className="border-t border-black w-full" />
          <p className="px-4 text-center whitespace-nowrap text-xl">
            Read next
          </p>
          <hr className="border-t border-black w-full" />
        </div>
        <div className="lg:px-16 md:px-16 sm:px-4 px-4 flex justify-between items-center">
          {blogIdx !== 0 ? (
            <Link href={`/blog/${blogsQuery.data.items[blogIdx - 1].title}`}>
              <a className="flex items-centers lg:w-2/6 justify-start">
                <PrevArrowIcon />
                <span className="lg:pl-2 md:pl-2 sm:pl-1 pl-1  text-xl text-center">
                  {blogsQuery.data.items[blogIdx - 1].title}
                </span>
              </a>
            </Link>
          ) : (
            <div className="w-full"></div>
          )}
          {blogIdx + 1 !== blogsQuery.data.items.length && (
            <Link href={`/blog/${blogsQuery.data.items[blogIdx + 1].title}`}>
              <a className="flex items-centers lg:w-2/6 justify-end">
                <span className="lg:pr-2 md:pr-2 sm:pr-1 pr-1 text-xl text-center">
                  {blogsQuery.data.items[blogIdx + 1].title}
                </span>
                <NextArrowIcon />
              </a>
            </Link>
          )}
        </div>
        <Footer />
      </div>
    );
  return (
    <div className="text-center h-screen w-screen flex items-center justify-center">
      loading blog content...
    </div>
  );
};

export default BlogDetails;
