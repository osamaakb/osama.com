import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { sideProjcets, SideProject } from "../../data/sideProjectsData";
import Link from "next/link";
import Footer from "../../components/Footer";
import marked from "marked";

const ProjectDetails: React.FC = () => {
  const router = useRouter();
  const projectId = router.query.slug;

  const { title, img, demoLink, repoLink, story, screenShots }: SideProject =
    sideProjcets.filter((project) => project.id === projectId)[0];

  return (
    <div>
      <Navbar black />
      <div className="lg:mx-16 md:mx-8 mx-4 my-4">
        <Link href="/projects">
          <a className="underline">{"<-"} back</a>
        </Link>
        <h1 className="text-3xl my-8">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: marked(story || "") }} />
        {img && (
          <img
            src={img}
            alt="project screenshot"
            className="text-center w-full object-contain lg:h-screen-3/4 md:h-screen-1/2 sm:h-screen-1/3"
          />
        )}
        {screenShots && <h1 className="text-3xl my-8">Mobile app</h1>}
        <div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1">
          {screenShots &&
            screenShots.split(",").map((screen) => {
              return <img src={screen} alt="screenshot" />;
            })}
        </div>
        <br />
        <div className="flex">
          <a className="underline text-gray-700" href={demoLink}>
            demo
          </a>
          <a className="ml-3 underline text-gray-700" href={repoLink}>
            github repo
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
