import { Fragment } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { get } from "../../lib/api"
import Sidebar from "../../components/modules/sidebar"
import Footer from "../../components/modules/footer"
import { normalizeAnchor } from "../../lib/utils"
import { NEXT_PUBLIC_BE_HOST } from "../../config"

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

function Project({ projects }) {
  return (
    <>
      <Sidebar className="mt-5" />
      <Footer />
      <ReactFullpage
        navigation
        scrollingSpeed={500}
        anchors={projects.map(
          ({ project_name }) => `${normalizeAnchor(project_name)}`
        )}
        render={() => (
          <ReactFullpage.Wrapper>
            {projects.map(
              ({
                _id,
                project_name,
                main_image_url,
                background_image_url,
                project_description,
                project_stack,
                your_impact,
              }) => (
                <div
                  data-anchor={`${normalizeAnchor(project_name)}`}
                  key={_id}
                  className="flex relative flex-col justify-start pt-5 w-full h-full section pb-[70px] pr-[30px]"
                >
                  <div className="w-full text-right text-white text-[56px] mt-[35px]">
                    {project_name}
                  </div>
                  <div className="flex flex-col justify-start items-start mx-auto max-w-[750px] mt-[30px]">
                    <img
                      alt="Project"
                      className="object-contain mb-8 w-full h-[450px]"
                      src={`${NEXT_PUBLIC_BE_HOST}/${main_image_url}`}
                    />
                    <img
                      alt="Project background"
                      className="object-contain absolute w-full top-[170px] left-[70px] max-w-[1000px] z-[-1] max-h-[700px]"
                      src={`${NEXT_PUBLIC_BE_HOST}/${background_image_url}`}
                    />
                    <div className="mb-4 text-white">
                      <span className="mr-2 text-grey">
                        Project description:
                      </span>
                      {project_description}
                    </div>
                    <div className="mb-4 text-white">
                      <span className="mr-2 text-grey">Project stack:</span>
                      {project_stack}
                    </div>
                    <div className="mb-4 text-white">
                      <span className="mr-2 text-grey">
                        My role on project:
                      </span>
                      {your_impact}
                    </div>
                  </div>
                  <img
                    alt="Arrow down"
                    className="object-contain absolute bg-no-repeat bg-contain bottom-[90px] right-[21px] w-[20px] max-h-[200px]"
                    src="./../../icons/arrow-down-long-white.svg"
                  />
                </div>
              )
            )}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  )
}
export default Project
