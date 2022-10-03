import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import Default from "../components/layout/default"
import { get } from "../lib/api"
import { normalizeAnchor } from "../lib/utils"
import { NEXT_PUBLIC_BE_HOST } from "../config"

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
      <div className="flex justify-between items-end h-full">
        <div>
          <div
            className="fixed rounded-full w-[300px] h-[300px] z-[-2] bg-red"
            style={{ transform: "translate(-50%, -50%)", ...mousePosition }}
          />
          <div className="relative top-[-100px] left-[100px] h-[550px] w-[450px]">
            <img
              id="image"
              src="/portfolio-my-picture.jpg"
              alt="Author"
              width={450}
              height={550}
              className="object-contain absolute top-0 left-0 z-10"
              style={{
                clipPath: "circle(150px at var(--x, -100%) var(--y, -100%))",
              }}
            />
            <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-0" />
          </div>
        </div>
        <div className="flex relative flex-col justify-end items-end w-fit max-w-[600px]">
          {isError && <div className="text-red">{message}</div>}
          {mainProjects.map(
            ({ _id, project_name, project_stack, background_image_url }) => (
              <Link
                key={_id}
                href={`/project#${normalizeAnchor(project_name)}`}
                passHref
              >
                <div className="flex flex-col items-end group h-[120px]">
                  <div className="flex flex-col cursor-pointer">
                    <p className="z-20 uppercase whitespace-nowrap cursor-pointer hover:text-white text-[56px] text-grey">
                      {project_name}
                    </p>
                    <img
                      alt="Project's background"
                      className="hidden object-contain absolute z-10 h-auto bg-no-repeat bg-contain group-hover:block top-[-150px] left-[-700px] min-w-[1100px] w-[900px]"
                      src={`${NEXT_PUBLIC_BE_HOST}/${background_image_url}`}
                    />
                  </div>
                  <p className="text-black normal-case ease-in-out group-hover:text-white text-[18px]">
                    {project_stack}
                  </p>
                </div>
              </Link>
            )
          )}
          <div className="flex overflow-hidden flex-wrap justify-end items-end mt-[12px]">
            <span className="normal-case cursor-pointer text-[20px] text-grey">
              Other projects:
            </span>
            {otherProjects.map(({ _id, project_name }) => (
              <Link
                key={_id}
                href={`/project#${normalizeAnchor(project_name)}`}
                passHref
              >
                <div className="relative normal-case cursor-pointer hover:text-white text-[20px] text-grey ml-[25px] after:w-[5px] after:h-[5px] after:rounded after:bg-grey after:absolute after:right-[-15px] after:top-[10px]">
                  {project_name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Default>
  )
}

export default Homepage
