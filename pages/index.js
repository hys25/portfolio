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
        <div className="container h-full flex flex-col items-end justify-end">
          <div className="flex flex-col items-end justify-end w-fit max-w-[600px]">
            {projectsData.map(project =>
              <div className="whitespace-nowrap uppercase text-[56px] text-grey cursor-pointer" key={project.id}>{project.label}</div>
            )}
            <div className="flex flex-wrap items-end justify-end overflow-hidden">
              <span className="text-[16px] normal-case text-grey cursor-pointer">Other projects:</span>
              {otherProjectsData.map(project =>
                <span className="relative text-[16px] normal-case text-grey cursor-pointer ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[10px]" key={project.id}>{project.label}</span>
              )}
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
export default Homepage;
