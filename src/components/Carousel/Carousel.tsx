import Head from "next/head";
import React from "react";
import PrevArrowIcon from "../../Icons/PrevArrowIcon";
import Slider from "react-slick";
import NextArrowIcon from "../../Icons/NextArrowIcon";

export interface CarouselProps {
  sliderSettings?: {};
}

const Carousel: React.FC<CarouselProps> = ({ children, sliderSettings }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "30px",
    dots: false,
    slidesToScroll: 1,
    prevArrow: (
      <div>
        <PrevArrowIcon />
      </div>
    ),
    nextArrow: (
      <div>
        <NextArrowIcon />
      </div>
    ),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerPadding: "10px",
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "30px",
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
        <React.Fragment>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </React.Fragment>
      </Head>
      <Slider {...(sliderSettings ?? settings)}>{children}</Slider>
    </div>
  );
};

export default Carousel;
