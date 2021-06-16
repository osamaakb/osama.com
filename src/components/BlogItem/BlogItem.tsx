import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export interface BlogItemProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  image,
  description,
  title,
  id,
}) => {
  return (
    <div className="lg:m-11 md:m-6 sm:mx-2 sm:my-5 max-w-sm">
      <div className="h-56 relative w-full">
        <Image src={image} objectFit="cover" layout="fill" />
      </div>
      <h3 className="text-xl my-3">{title}</h3>
      <p className="text-gray-600">
        {description}
        <br />
        <Link href={`/blog/${id}`}>
          <a className="text-gray-400 underline"> Read more</a>
        </Link>
      </p>
    </div>
  );
};

export default BlogItem;
