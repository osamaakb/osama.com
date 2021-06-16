import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="relative" style={{ height: "70vh" }}>
        <div className="absolute w-full h-full">
          <div className="relative h-full">
            <Image
              src="/aboutme.png"
              layout="fill"
              objectFit="cover"
              alt="personal picture"
            />
          </div>
        </div>
        <div className="absolute opacity-25 bg-black w-full h-full"></div>
        <div className="absolute left-0 right-0">
          <Navbar />
        </div>
      </div>
      <div className="px-36 py-14">
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p className="text-2xl py-3">MY NAME’S OSAMA</p>
        <p className="font-thin">
          I’m a DP & Director based in Sydney, Australia, specialising in social
          media content and short-form film production. I produce my work
          through my company, ritchieollie, doing projects that range from
          commercial freelancing, to social media marketing and content
          creation. I also make my own personal work, producing short films and
          photography projects to my lovely audience. I started making films
          back in 2009 when I made a thriller using my Macbook&lsquo;s webcam,
          iMovie and my two little brothers. Since then I&lsquo;ve made a bunch
          more films that I&lsquo;ve released through instagram and youtube.
          Some find their way into small film festivals and others send me
          across the world. In late 2018 I finished up a 3 year course with
          AFTRS, graduating with a Bachelor of Arts Screen: Production.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;