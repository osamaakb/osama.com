import Head from "next/head";
import Link from "next/link";
import React from "react";
import Delayed from "../../components/Delayed";
import Navbar from "../../components/Navbar";
import { sideProjcets, SideProject } from "../../data/sideProjectsData";

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
            {
              title,
              img,
              id,
              repoLink,
              demoLink,
              story,
              description,
            }: SideProject,
            i
          ) => {
            return (
              <Delayed waitBeforeShow={i * 200} key={id}>
                <Link href={`/projects/${id}`}>
                  <div className="animate-fade p-8 border border-black flex-col text-left hover:border-transparent cursor-pointer">
                    <h1 aria-label="title" className="font-bold mb-2">
                      {title}
                    </h1>
                    <p aria-label="description">{description}</p>
                    <div className="text-right text-gray-600 mt-4">
                      <a href={repoLink} className="underline">
                        repo
                      </a>
                      <a href={demoLink} className="underline ml-2">
                        demo
                      </a>
                    </div>
                  </div>
                </Link>
              </Delayed>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
