import { useEffect, useState, useMemo } from "react"
import { NextSeo } from "next-seo"
import Link from "next/link"
import Default from "../components/layout/default"
import { get } from "../lib/api"
import { normalizeAnchor } from "../lib/utils"
import { NEXT_PUBLIC_BE_HOST } from "../config"
import { useMedia } from "../providers/mediaContext"

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
  const { xl } = useMedia()
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

  useEffect(() => {
    const image = document.getElementById("image")
    const boundaries = image.getBoundingClientRect()
    const handler = (event) => {
      image.style.setProperty("--x", `${event.clientX - boundaries.left}px`)
      image.style.setProperty("--y", `${event.clientY - boundaries.top}px`)
      setMousePosition({ top: event.clientX, left: event.client })
    }

    document.addEventListener("mousemove", handler)
    return () => {
      document.removeEventListener("mousemove", handler)
    }
  })

  return (
    <Default>
      <NextSeo
        title="Halyna's Yavtushenko Frontend Engineer portfolio"
        description="Toronto-based Front-End engineer with over 2 years of experience. Interested in the entire full-stack spectrum and working on ambitious projects with positive people."
        openGraph={{
          url: "https://galinie.ca/",
          title:
            "Welcome to Halyna's Yavtushenko Frontend Engineer portfolio home page",
          description:
            "Toronto-based Front-End engineer with over 2 years of experience. Interested in the entire full-stack spectrum and working on ambitious projects with positive people.",
          images: [
            {
              url: "https://galinie.ca/portfolio-my-picture.jpg",
              width: 450,
              height: 700,
              alt: "Halyna Yavtushenko",
              type: "image/jpeg",
            },
          ],
          site_name: "Halyna Yavtushenko",
        }}
      />
      <h1 className="text-[0px]">Halyna Yavtushenko</h1>
      <div className="flex justify-between items-end h-full md:flex-col">
        <div>
          <div
            className="fixed rounded-full w-[300px] h-[300px] z-[-2] md:w-[100px] md:h-[100px]"
            style={{ transform: "translate(-50%, -50%)", ...mousePosition }}
          />
          <div className="relative left-0 top-[-100px] h-[550px] w-[450px] md:h-[200px] md:w-[160px] md:top-[80px] md:left-[-100px]">
            <img
              id="image"
              src="/portfolio-my-picture.jpg"
              alt="Author"
              width={450}
              height={550}
              className="object-contain absolute top-0 left-0 z- md:h-[200px] md:w-[160px]"
              style={
                xl
                  ? {
                      clipPath:
                        "circle(50px at var(--x, -100%) var(--y, -100%))",
                    }
                  : {
                      clipPath:
                        "circle(150px at var(--x, -100%) var(--y, -100%))",
                    }
              }
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-0" />
          </div>
        </div>
        <div className="flex relative z-0 flex-col justify-end items-end md:justify-start md:items-start w-fit max-w-[600px]">
          {isError && <div className="text-red">{message}</div>}
          {mainProjects.map(
            ({
              _id,
              project_name,
              project_stack,
              background_image_url,
              main_image_url,
            }) => (
              <Link
                key={_id}
                href={`/project#${normalizeAnchor(project_name)}`}
                passHref
              >
                <div className="flex flex-col items-end md:justify-start md:items-start md:h-auto group h-[120px]">
                  <div className="flex flex-col cursor-pointer">
                    <h2 className="z-20 uppercase whitespace-nowrap cursor-pointer group-hover:text-white hover:text-white text-[56px] text-grey md:text-[18px]">
                      {project_name}
                    </h2>
                    <img
                      alt="Project's background"
                      className="hidden object-contain absolute z-10 h-auto bg-no-repeat bg-contain group-hover:block top-[-180px] left-[-700px] min-w-[850px] w-[850px] max-h-[550px] md:min-w-full md:max-w-screen md:w-full md:left-0 md:top-[-85%]"
                      src={`${NEXT_PUBLIC_BE_HOST}/${
                        background_image_url || main_image_url
                      }`}
                    />
                  </div>
                  <h3 className="font-light normal-case ease-in-out md:block group-hover:text-white text-grey text-[18px] md:text-[14px]">
                    {project_stack}
                  </h3>
                </div>
              </Link>
            )
          )}
          <div className="flex overflow-hidden flex-wrap justify-end items-end md:justify-start md:items-start md:mt-0 mt-[12px]">
            <span className="normal-case cursor-pointer md:font-thin text-[20px] text-grey md:mr-[10px] md:text-[16px]">
              Other projects:
            </span>
            {otherProjects.map(({ _id, project_name }) => (
              <Link
                key={_id}
                href={`/project#${normalizeAnchor(project_name)}`}
                passHref
              >
                <h2 className="relative normal-case cursor-pointer md:ml-0 md:font-thin hover:text-white text-[20px] text-grey ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[10px] md:mr-[10px] md:after:hidden md:text-[16px]">
                  {project_name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Homepage
