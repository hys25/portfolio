import Link from "next/link";
import { Fragment } from "react";
import Default from "../components/layout/default";
import {get} from "../lib/api"

const projectsData = [
  {
    id: 0,
    label: "Pixel Retail",
    slug: "/pixel-retail",
  },
  {
    id: 1,
    label: "Dating App",
    slug: "/dating-app",
  },
  {
    id: 2,
    label: "INVESTMENT WEBSITE",
    slug: "/dating-app",
  },
  {
    id: 3,
    label: "CHAMPAGNE WEBSITE",
    slug: "/dating-app",
  },
];
const otherProjectsData = [
  {
    id: 0,
    label: "Pixel Retail",
    slug: "/pixel-retail",
  },
  {
    id: 1,
    label: "Dating App",
    slug: "/dating-app",
  },
  {
    id: 2,
    label: "INVESTMENT WEBSITE",
    slug: "/dating-app",
  },
  {
    id: 3,
    label: "CHAMPAGNE WEBSITE",
    slug: "/dating-app",
  },
];


export async function getServerSideProps(context) {
  const { data, message , isError } = await get('http://localhost:3000/project');
  return {
    props: {
      projects : data,
      message,
      isError
    },
  }
}

function Homepage({projects, message, isError}) {
  const mainProjects = projects.filter(project => project.main_project === true)
  const otherProjects = projects.filter(project => project.main_project === false)
  return (
    <Default>
      <div className="h-full flex flex-col items-end justify-end">
        <div className="flex flex-col items-end justify-end w-fit max-w-[600px]">
          {isError && <div className="text-red">{message}</div>}
          {mainProjects.map((project) => (
            <Link key={project._id} href={"#"} passHref>
              <div className="flex flex-col items-end hover:text-red">
                <a
                  href="#"
                  alt="project"
                  className="whitespace-nowrap uppercase text-[56px] text-grey cursor-pointer hover:text-white"
                >
                  {project.project_name}
                </a>
                <p className="text-[16px] normal-case text-grey">{project.project_stack}</p>
              </div>
            </Link>
          ))}
          <div className="flex flex-wrap items-end justify-end overflow-hidden">
            <span className="text-[16px] normal-case text-grey cursor-pointer">
              Other projects:
            </span>
            {otherProjects.map((project) => (
              <Link key={project.id} href={"#"} passHref>
                <a
                  href={"#"}
                  alt="project"
                  className="relative text-[16px] normal-case text-grey cursor-pointer ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[10px] hover:text-white"
                >
                  {project.project_name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Default>
  );
}

export default Homepage;
