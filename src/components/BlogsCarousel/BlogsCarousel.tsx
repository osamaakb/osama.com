import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getBlogs } from "../../api/Blog";
import BlogItem from "../BlogItem";
import Button from "../Button/Button";
import Carousel from "../Carousel";

export interface BlogsCarouselProps {}

const BlogsCarousel: React.FC<BlogsCarouselProps> = () => {
  const router = useRouter();
  const blogsQuery = useQuery("blog", getBlogs);

  return (
    <div className="pt-16">
      {/* @todo add real data and make the carousel responsive */}
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
