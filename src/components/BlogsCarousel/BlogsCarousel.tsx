import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getBlogs } from "../../api/Blog";
import BlogItem from "../BlogItem";
import Button from "../Button/Button";
import Carousel from "../Carousel";

const BlogsCarousel: React.FC = () => {
  const router = useRouter();
  const blogsQuery = useQuery("blog", getBlogs);

  return (
    <div className="pt-16">
      <Carousel>
        {blogsQuery.isSuccess &&
          blogsQuery.data.items.map((blog: any, blogIdx: number) => (
            <div key={blogIdx}>
              <BlogItem {...blog} />
            </div>
          ))}
      </Carousel>
      <div className="text-center p-16">
        <Button
          handleClick={() => {
            router.push("/blog");
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default BlogsCarousel;
