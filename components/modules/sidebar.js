import Logo from "../elements/logo"
import Nav from "./nav"
import SocialLinks from "../elements/socialLinks"
import { useMedia } from "../../providers/mediaContext"

function Sidebar({ className }) {
  const { md } = useMedia()
  return md ? null : (
    <div className={`fixed h-full w-fit left-[30px] z-[1] ${className}`}>
      <div className="flex flex-col flex-1 h-full items-between">
        <div className="mb-5 md:mb-0 w-fit md:ml-[20px] md:mt-[10px]">
          <Logo />
          <Nav />
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
