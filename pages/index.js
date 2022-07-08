import Link from "next/link";
import { Fragment } from "react";
import Default from "../components/layout/default";

const projectsData = [
  {
    id: 0,
    label: 'Pixel Retail',
    slug: '/pixel-retail'
  },
  {
    id: 1,
    label: 'Dating App',
    slug: '/dating-app'
  },
  {
    id: 2,
    label: 'INVESTMENT WEBSITE',
    slug: '/dating-app'
  },
  {
    id: 3,
    label: 'CHAMPAGNE WEBSITE',
    slug: '/dating-app'
  },
]
const otherProjectsData = [
  {
    id: 0,
    label: 'Pixel Retail',
    slug: '/pixel-retail'
  },
  {
    id: 1,
    label: 'Dating App',
    slug: '/dating-app'
  },
  {
    id: 2,
    label: 'INVESTMENT WEBSITE',
    slug: '/dating-app'
  },
  {
    id: 3,
    label: 'CHAMPAGNE WEBSITE',
    slug: '/dating-app'
  },
]

function Homepage() {
  return (
    <>
      <Default>
        <div className="h-full flex flex-col items-end justify-end">
          <div className="flex flex-col items-end justify-end w-fit max-w-[600px]">
            {projectsData.map(project =>
              <Link key={project.id} href={'#'} passHref>
                <a href="#" alt="project" className="whitespace-nowrap uppercase text-[56px] text-grey cursor-pointer hover:text-white">
                  {project.label}
                </a>
              </Link>
            )}
            <div className="flex flex-wrap items-end justify-end overflow-hidden">
              <span className="text-[16px] normal-case text-grey cursor-pointer">Other projects:</span>
              {otherProjectsData.map(project =>
                <Link key={project.id} href={'#'} passHref>
                  <a href={'#'} alt="project" className="relative text-[16px] normal-case text-grey cursor-pointer ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[10px] hover:text-white">
                    {project.label}
                  </a>
              </Link>
              )}
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
export default Homepage;
