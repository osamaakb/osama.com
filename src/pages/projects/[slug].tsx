import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { sideProjcets, SideProject } from "../../data/sideProjectsData";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export interface ProjectDetailsProps {}

const ProjectDetails: React.FC<ProjectDetailsProps> = () => {
  const router = useRouter();
  const projectId = router.query.slug;

  const { title, img, description, demoLink, repoLink, story }: SideProject =
    sideProjcets.filter((project) => project.id === projectId)[0];

  return (
    <div>
      <Navbar black />
      <div className="mx-16 my-4">
        <Link href="/projects">
          <a className="underline">{"<-"} back</a>
        </Link>
        <h1 className="text-3xl my-8">{title}</h1>
        {img && <img src={img} alt="project image" />}
        <ReactMarkdown children={story} />
        <div className="flex">
          <a className="underline text-gray-700" href={demoLink}>
            demo
          </a>
          <a className="ml-3 underline text-gray-700" href={repoLink}>
            github repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
