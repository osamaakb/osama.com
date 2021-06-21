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
      // setBlog(blogsQuery.data.items[blogIdx]);
    }
  }, [blogsQuery.data, router.query.slug]);

  if (blogsQuery.isError) return <div>error loading blogs</div>;

  if (blogsQuery.isSuccess) return (
      <div>
        <Navbar black />
        <div className="px-52">
          <h1 className="text-4xl py-4">
            {blogsQuery.data.items[blogIdx].title}
          </h1>
          <span className="text-xl leading-8 text-justify">
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
        <div className="px-16 flex justify-between items-center">
          {blogIdx !== 0 && (
            <Link href={`/blog/${blogsQuery.data.items[blogIdx - 1].title}`}>
              <a className="flex items-centers lg:w-2/6 justify-start">
                <PrevArrowIcon />
                <span className="pl-2 text-xl text-center">
                  {blogsQuery.data.items[blogIdx - 1].title}
                </span>
              </a>
            </Link>
          )}
          {blogIdx !== blogsQuery.data.items.length && (
            <Link href={`/blog/${blogsQuery.data.items[blogIdx + 1].title}`}>
              <a className="flex items-centers lg:w-2/6 justify-end">
                <span className="pr-2 text-xl text-center">
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
