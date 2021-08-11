import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";
import { sideProjcets, SideProject } from "../../data/sideProjectsData";

const Projects: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar black />
      <div className="flex flex-wrap justify-between lg:mx-12 md:mx-4 sm:mx-0">
        {sideProjcets.map((project: SideProject) => {
          return (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="p-8 border border-black flex-col m-4 lg:flex-1 md:flex-auto sm:flex-grow text-left hover:border-transparent cursor-pointer">
                <h1 aria-label="title" className="font-bold mb-2">
                  {project.title}
                </h1>
                <p aria-label="description">{project.description}</p>
                <div className="text-right text-gray-600 mt-4">
                  <a href={project.repoLink} className="underline">
                    repo
                  </a>
                  <a href={project.demoLink} className="underline ml-2">
                    demo
                  </a>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
