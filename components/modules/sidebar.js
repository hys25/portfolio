import { Fragment } from "react";
import Logo from "../elements/logo";
import Nav from "./nav";
import SocialLinks from "../elements/socialLinks";
import DownloadCv from "../elements/downloadCv";

function Sidebar() {
  return (
    <div className="h-full w-fit fixed left-[30px] z-[1]">
      <div className="h-full flex flex-col items-between justify-between flex-1">
        <div className="mb-5 w-fit">
          <Logo />
          <Nav />
        </div>
        <div>
          <SocialLinks />
          <DownloadCv />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
