import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface BlogItemProps {}

const BlogItem: React.FC<BlogItemProps> = () => {
  return (
    <div className="lg:m-11 md:m-6 sm:m-2">
      <div className="h-56 relative w-full">
        <Image src="/landingpage.jpg" objectFit="cover" layout="fill" />
      </div>
      <h3 className="text-xl my-3">I don’t have curtains at my house</h3>
      <p className="text-gray-600">
        I have been involved in web development for several years. During this
        time, I have carried out more than 20 projects from the development of
        smaller landing pages to large corporate websites.
        <br />
        <Link href="/blog/{BLOG_ID}">
          <a className="text-gray-400 underline"> Read more</a>
        </Link>
      </p>
    </div>
  );
};

export default BlogItem;
