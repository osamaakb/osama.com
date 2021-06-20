import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import { BlogItemProps } from "../../types/BlogItem";

const BlogItem: React.FC<BlogItemProps> = ({ thumbnail, title, content }) => {
  function truncate(str: string, n: number) {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
  }

  return (
    <div className="lg:m-11 md:m-6 sm:mx-2 sm:my-5 max-w-sm">
      <div className="h-56 relative w-full">
        <Image src={thumbnail} objectFit="cover" layout="fill" />
      </div>
      <h3 className="text-xl my-3">{title}</h3>
      <p className="text-gray-600">
        {ReactHtmlParser(truncate(content, 200))}
        <Link href={`/blog/${title}`}>
          <a className="text-gray-400 underline"> Read more</a>
        </Link>
      </p>
    </div>
  );
};

export default BlogItem;
