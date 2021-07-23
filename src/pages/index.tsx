import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import BlogsCarousel from "../components/BlogsCarousel";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Osama akb</title>
        <meta name="osama akb" content="osama profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="lg:m-16 md:m-16 sm:m-8 my-8 mx-4">
        <Image
          src="/itisOsamatext.png"
          alt="it is osama"
          height={40}
          width={200}
          objectFit="contain"
          layout="intrinsic"
        />
        <p className="lg:text-3xl md:text-3xl sm:text-3xl text-xl lg:leading-snug md:leading-snug sm:leading-snug leading-relaxed lg:my-3 md:my-3 sm:my-3 my-1">
          I’m an Iraqi software engineer living and working in Istanbul. I love
          creating things, writing blogs, taking photos, and speaking at
          conferences.
        </p>
        <Link href="/about">
          <a className="text-gray-400 underline text-xl">More about me?</a>
        </Link>
      </div>
      <div className="lg:h-40 md:h-40 sm:h-40 h-32  bg-primary flex items-center">
        <h1 className="text-white lg:text-5xl md:text-5xl sm:text-4xl text-3xl lg:m-16 md:m-16 sm:m-8 m-4">
          Recent Writings
        </h1>
      </div>
      <BlogsCarousel />
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}
