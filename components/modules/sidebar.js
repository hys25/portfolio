import Logo from "../elements/logo"
import Nav from "./nav"
import SocialLinks from "../elements/socialLinks"
import DownloadCv from "../elements/downloadCv"

function Sidebar() {
  return (
    <div className="fixed h-full w-fit left-[30px] z-[1]">
      <div className="flex flex-col flex-1 justify-between h-full items-between">
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
  )
}

export default Sidebar
