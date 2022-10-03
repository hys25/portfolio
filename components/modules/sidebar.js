import Logo from "../elements/logo"
import Nav from "./nav"
import SocialLinks from "../elements/socialLinks"
import DownloadCv from "../elements/downloadCv"

function Sidebar({ className }) {
  return (
    <div
      className={`fixed h-full w-fit left-[30px] z-[1] md:h-auto ${className}`}
    >
      <div className="flex flex-col flex-1 justify-between h-full items-between">
        <div className="mb-5 w-fit">
          <Logo />
          <Nav className="md:hidden" />
        </div>
        <div>
          <SocialLinks className="md:hidden" />
          <DownloadCv className="md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
