import { Fragment } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import { NextSeo } from "next-seo"
import { get } from "../../lib/api"
import Sidebar from "../../components/modules/sidebar"
import Footer from "../../components/modules/footer"
import NavMobile from "../../components/modules/navMobile"
import { normalizeAnchor } from "../../lib/utils"
import { NEXT_PUBLIC_BE_HOST } from "../../config"
import { useMedia } from "../../providers/mediaContext"

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
  const { xl } = useMedia()
  return (
    <>
      {xl ? (
        <NavMobile className="mt-5 pr-[20px]" />
      ) : (
        <Sidebar className="mt-5" />
      )}
      <Footer />
      <NextSeo
        title="Project page"
        description="Assets, project's stack, description and role on the project are represented on the project page "
      />
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
                project_description,
                project_stack,
                your_impact,
              }) => (
                <div
                  data-anchor={`${normalizeAnchor(project_name)}`}
                  key={_id}
                  className="flex relative flex-col justify-start pt-5 w-full h-full section pb-[20px] pr-[30px] md:pt-[80px] md:px-[20px]"
                >
                  <h1 className="w-full text-right text-white uppercase md:mt-0 md:text-center text-[56px] leading-[56px] mt-[25px] md:text-[16px]">
                    {project_name}
                  </h1>
                  <div className="flex flex-col justify-start items-start mx-auto md:mt-2 max-w-[1000px] mt-[30px]">
                    <img
                      alt="Project"
                      className="object-cover mb-8 w-full border-transparent outline-none md:object-cover md:mb-2 outline-transparent h-[350px] translate-z-0 md:h-[180px]"
                      src={`${NEXT_PUBLIC_BE_HOST}/${main_image_url}`}
                    />
                    {/* {background_image_url && (
                      <img
                        alt="Project background"
                        className="object-contain absolute w-full md:hidden top-[170px] left-[70px] max-w-[1000px] z-[-1] max-h-[700px]"
                        src={`${NEXT_PUBLIC_BE_HOST}/${background_image_url}`}
                      />
                    )} */}
                    <div className="flex mb-4 text-white md:mb-1 md:font-thin md:text-[14px]">
                      <span className="min-w-[150px] text-grey whitespace-nowrap">
                        Project description:
                      </span>
                      <p className="w-full whitespace-pre-wrap font-thin">
                        {project_description}
                      </p>
                    </div>
                    <div className="flex mb-4 text-white md:mb-1 md:font-thin md:text-[14px]">
                      <span className="min-w-[150px] text-grey whitespace-nowrap">
                        Project stack:
                      </span>
                      <p className="w-full whitespace-pre-wrap font-thin">
                        {project_stack}
                      </p>
                    </div>
                    <div className="flex mb-4 text-white md:mb-1 md:font-thin md:text-[14px]">
                      <span className="min-w-[150px] text-grey whitespace-nowrap">
                        My role on project:
                      </span>
                      <p className="w-full whitespace-pre-wrap font-thin">
                        {your_impact}
                      </p>
                    </div>
                  </div>
                  <img
                    alt="Arrow down"
                    className="object-contain absolute bg-no-repeat bg-contain bottom-[90px] right-[21px] w-[20px] max-h-[200px] md:right-[1px]"
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
