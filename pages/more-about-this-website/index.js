import { Fragment } from "react";
import Default from "../../components/layout/default";

function MoreAboutThisWebsite() {
  return(
    <Default>
      <div className="flex text-white mt-[150px] w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col w-2/3">
          Website description
        </div>
        <div className="flex flex-col w-1/3">
          Full Features List :
        </div>
      </div>
    </Default>
  )
}
export default MoreAboutThisWebsite;
