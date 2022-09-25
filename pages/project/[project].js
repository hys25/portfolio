import { Fragment } from "react";
import {get} from "../../lib/api"
import ReactFullpage from '@fullpage/react-fullpage';
import Default from "../../components/layout/default";
import Sidebar from "../../components/modules/sidebar";
import Footer from "../../components/modules/footer";

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

function Project({projects}) {
  return(
    <>
    <Sidebar/>
    <Footer/>
      <ReactFullpage
        navigation
        scrollingSpeed = {500}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {projects.map(({_id, project_name, main_image_url, background_image_url, project_description, project_impact, project_stack, your_impact}) => (
                <div key={_id} className="section relative h-full pt-5 pb-[70px] w-full  pr-[30px] flex flex-col justify-start">
                  <div className="w-full text-white text-right text-[56px] mt-[35px]">{project_name}</div>
                  <div className="relative max-w-[750px] mx-auto flex flex-col justify-start items-start mt-[100px]">
                    <img className="mb-8 max-h-[350px] w-full object-cover" src={`http://localhost:3000/${main_image_url}`} />
                    <img className="absolute top-[-160px] left-[-200px] min-w-[850px] z-[-1] w-full object-cover" src={`http://localhost:3000/${background_image_url}`} />
                    <div className="mb-4 text-white"><span className="mr-2 text-grey">Project description:</span>{project_description}</div>
                    <div className="mb-4 text-white"><span className="mr-2 text-grey">Project stack:</span>{project_stack}</div>
                    <div className="mb-4 text-white"><span className="mr-2 text-grey">My role on project:</span>{your_impact}</div>
                  </div>
                  <img className="absolute bottom-[90px] right-[21px] w-[20px] max-h-[200px] object-contain bg-no-repeat bg-contain" src="./../../icons/arrow-down-long-white.svg"></img>
                </div>
              ))}
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
  )
}
export default Project;
