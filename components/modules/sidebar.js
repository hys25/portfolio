import Logo from "../elements/logo"
import Nav from "./nav"
import SocialLinks from "../elements/socialLinks"
import DownloadCv from "../elements/downloadCv"
import { useMedia } from "../../providers/mediaContext"

function Sidebar({ className }) {
  const { xl } = useMedia()
  return xl ? null : (
    <div className={`fixed h-full w-fit left-[30px] z-[1] ${className}`}>
      <div className="flex flex-col flex-1 justify-between h-full items-between">
        <div className="mb-5 md:mb-0 w-fit md:ml-[20px] md:mt-[10px]">
          <Logo />
          <Nav />
        </div>
        <div>
          <SocialLinks />
          <DownloadCv />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
