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
        <div className="absolute opacity-50 bg-black w-full h-full"></div>
        <div className="absolute left-0 right-0">
          <Navbar />
        </div>
      </div>
      <div className="lg:px-36 md:px-32 sm:px-24 px-8 lg:py-14 md:py-14 sm:py-8 py-8">
        <h1 className="text-4xl font-bold">Hello there!</h1>
        <p className="text-2xl py-3">MY NAME’S OSAMA</p>
        <p className="font-thin text-justify">
          I’m a full-stack Software enginner based in Istanbul, Turkey, with
          experience in training and mentoring. I have been working as a coding
          instructor with the non-profit org{" "}
          <a href="https://www.re-coded.com/" className="underline">
            re:coded
          </a>{" "}
          to empower youth in conflict areas in the middle east and teach them
          coding, before that I used to work as a freelance mobile applications
          developer for almost 2 years, which gave me a lot of experience
          working with different clients and expanding to different rules
          outside coding like project planning and management, I also, studied
          software engineering and computer science in the University of Mosul
          in Iraq, <br />I started coding in a young age (around 18 years old)
          but was mostly not sure what I'm doing, by the age of 20 I got to
          actually build real apps, I have always had a passion in designing my
          own UI/UX for my apps and since I was working alone I got to learn
          about that a bit too. <br />
          After that I was really curious to explore other sides of software
          enginnering like back-end (the server side) and front-end (the
          interface side) when I landed a web front-end coding instructor at
          re-coded, I had the chance to work with loads of different people who
          wants to learn coding which really gave me the chance to work on many
          of my soft-skills, like leading, speaking, feedback, communication,
          and many other soft-skills. <br />I don't think I'm exaggerating when
          I say I'm a detail oriented person, I pay close attention to all
          details and have a good memory (what my wife say about me at least).
          <br />
          Software engineering and coding have been my passion and what I want
          to do for a long time but not only that, in the past few years I also
          learned a lot about training and helping people in different
          categories coding related and life-skills, that helped me understand a
          lot more about life and people. so now I'm always aiming to build
          things that help improving people's life (specially those who really
          need the help).
          <br /> <br /> Oh, did I mention that I love photography and art in
          general? (check out my{" "}
          <a href="https://www.instagram.com/osamaakb/" className="underline">
            instagram
          </a>
          )
          <br /> <br /> please feel free to reachout on any of my social
          networks or email below (:
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
