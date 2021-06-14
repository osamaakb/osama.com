import React from "react";
import BlogItem from "../BlogItem";
import Button from "../Button/Button";
import Carousel from "../Carousel";

export interface BlogsCarouselProps {}

const BlogsCarousel: React.FC<BlogsCarouselProps> = () => {
  return (
    <div className="pt-16">
      {/* @todo add real data and make the carousel responsive */}
      <Carousel>
        <div>
          <BlogItem />
        </div>
        <div>
          <BlogItem />
        </div>
        <div>
          <BlogItem />
        </div>
        <div>
          <BlogItem />
        </div>
      </Carousel>
      <div className="text-center p-16">
        <Button handleClick={() => {}}>View All</Button>
      </div>
    </div>
  );
};

export default BlogsCarousel;
