import Head from "next/head";
import Link from "next/link";
import React from "react";
import Delayed from "../../components/Delayed";
import Navbar from "../../components/Navbar";
import { sideProjcets, SideProject } from "../../data/sideProjectsData";
import Footer from "../../components/Footer";

const Projects: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar black />
      <div className="lg:mx-12 md:mx-4 sm:mx-0 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-4">
        {sideProjcets.map(
          (
            { title, img, id, repoLink, demoLink, description }: SideProject,
            i
          ) => {
            return (
              <Delayed waitBeforeShow={i * 200} key={id}>
                <div className="animate-fade p-8 border border-black flex-col text-left hover:border-transparent cursor-pointer">
                  <Link href={`/projects/${id}`}>
                    <div>
                      {img && <img src={img} alt="poster" />}
                      <h1 aria-label="title" className="font-bold my-2">
                        {title}
                      </h1>
                      <p aria-label="description">{description}</p>
                    </div>
                  </Link>
                  <div className="text-right text-gray-600 mt-4">
                    <a href={repoLink} className="underline">
                      repo
                    </a>
                    {demoLink && (
                      <a href={demoLink} className="underline ml-2">
                        demo
                      </a>
                    )}
                  </div>
                </div>
              </Delayed>
            );
          }
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
