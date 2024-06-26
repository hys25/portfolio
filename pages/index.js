import { useState, useMemo } from "react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import Default from "../components/layout/default"
import { get } from "../lib/api"
import { normalizeAnchor } from "../lib/utils"
import { NEXT_PUBLIC_BE_HOST } from "../config"
import ImageHidden from "../components/elements/imageHidden"

export async function getServerSideProps() {
  const { data, message, isError } = await get(`${NEXT_PUBLIC_BE_HOST}/project`)
  return {
    props: {
      projects: data,
      message,
      isError,
    },
  }
}

function Homepage({ projects, message, isError }) {
  const [mainProjects, otherProjects] = useMemo(() => {
    const main = []
    const other = []
    projects.forEach((project) => {
      if (project.main_project === true) {
        main.push(project)
      } else {
        other.push(project)
      }
    })
    return [main, other]
  }, [projects])
  const [mousePosition, setMousePosition] = useState({ top: 0, left: 0 })

  return (
    <Default>
      <NextSeo
        title="Frontend Engineer portfolio - Halyna Yavtushenko"
        description="Toronto-based Front-End engineer. Interested in the entire full-stack spectrum and working on ambitious projects with positive people."
        openGraph={{
          url: "https://galinie.ca/",
          title: "Front-End Engineer portfolio - Halyna Yavtushenko",
          description:
            "Toronto-based Front-End engineer. Interested in the entire full-stack spectrum and working on ambitious projects with positive people.",
          images: [
            {
              url: "https://galinie.ca/portfolio-my-picture.jpg",
              width: 450,
              height: 700,
              alt: "Halyna Yavtushenko",
              type: "image/jpeg",
            },
          ],
          site_name: "Front-End Engineer portfolio - Halyna Yavtushenko",
        }}
      />
      <h1 className="text-[0px]">
        Front-End Engineer portfolio - Halyna Yavtushenko
      </h1>
      <div className="flex justify-between items-end h-full md:h-[calc(100vh-65px)] xl:justify-end xl:w-full">
        <ImageHidden
          mousePosition={mousePosition}
          setMousePosition={setMousePosition}
        />
        <div className="flex relative z-0 flex-col justify-end items-end md:justify-start md:items-start w-fit max-w-[600px]">
          {isError && <div className="text-red">{message}</div>}
          {mainProjects.map(
            ({
              _id,
              project_name,
              project_stack,
              project_description,
              your_impact,
              background_image_url,
              main_image_url,
            }) => (
              <Link
                key={_id}
                href={`/project#${normalizeAnchor(project_name)}`}
                passHref
              >
                <a
                  className="flex flex-col items-end md:justify-start md:items-start md:h-auto group h-[120px]"
                  href={`/project#${normalizeAnchor(project_name)}`}
                >
                  <div className="flex flex-col cursor-pointer">
                    <h2 className="z-20 relative uppercase whitespace-nowrap cursor-pointer group-hover:text-white text-[56px] text-grey md:text-[18px] md:text-greyLight md:font-medium font-[500]">
                      {project_name}
                      <img
                        alt="Arrow to the left"
                        className="hidden absolute z-10 group-hover:block bottom-[29px] left-[-55px] w-[40px] h-[40px] -rotate-90"
                        src="./../../icons/arrow-top-right-white.svg"
                      />
                    </h2>
                    <img
                      alt="Project's background"
                      className="hidden object-contain absolute z-10 h-auto bg-no-repeat bg-contain group-hover:block top-[-50px] left-[-700px] min-w-[850px] w-[850px] max-h-[550px] md:min-w-full md:max-w-screen md:w-full md:left-0 md:top-[-85%] md:group-hover:hidden"
                      src={`${NEXT_PUBLIC_BE_HOST}/${
                        background_image_url || main_image_url
                      }`}
                    />
                  </div>
                  <h3 className="font-light normal-case ease-in-out md:block group-hover:text-white text-grey text-[18px] md:text-[14px]">
                    {project_stack}
                  </h3>
                  <p className="text-[0px]">{project_description}</p>
                  <p className="text-[0px]">{your_impact}</p>
                </a>
              </Link>
            )
          )}
          <div className="flex overflow-hidden flex-wrap justify-end items-end md:justify-start md:items-start md:mt-0 mt-[12px]">
            <span className="normal-case cursor-pointer md:font-thin text-[20px] text-grey md:mr-[10px] md:text-[16px]">
              Other projects:
            </span>
            {otherProjects.map(
              ({ _id, project_name, project_description, your_impact }) => (
                <Link
                  key={_id}
                  href={`/project#${normalizeAnchor(project_name)}`}
                  passHref
                >
                  <a href={`/project#${normalizeAnchor(project_name)}`}>
                    <h2 className="relative normal-case cursor-pointer md:ml-0 md:font-normal hover:text-white text-[20px] text-grey ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[13px] md:mr-[10px] md:after:hidden md:text-[16px] md:text-greyLight">
                      {project_name}
                    </h2>
                    <p className="text-[0px]">{project_description}</p>
                    <p className="text-[0px]">{your_impact}</p>
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Homepage
