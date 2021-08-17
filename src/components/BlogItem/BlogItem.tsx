import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import reactHtmlParser from "react-html-parser";
import { BlogProps } from "../../types/Blog";

const BlogItem: React.FC<BlogProps> = ({ thumbnail, title, content }) => {
  function truncate(str: string, n: number) {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
  }

  return (
    <Link href={`/blog/${title}`}>
      <a aria-label="open block">
        <div className="lg:m-8 md:m-6 sm:mx-2 sm:my-5 my-5 mx-4 lg:mx-4 md:mx-4 animate-fade">
          <div className="h-56 relative w-full">
            <Image
              src={thumbnail}
              objectFit="cover"
              layout="fill"
              alt="thumbnail"
            />
          </div>
          <h3 className="text-xl my-3">{title}</h3>
          <span className="text-gray-600">
            {reactHtmlParser(truncate(content, 200))}
            <Link href={`/blog/${title}`}>
              <span className="text-gray-400 underline"> Read more</span>
            </Link>
          </span>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
