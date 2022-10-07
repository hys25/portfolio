import { useState } from "react"
import { useRouter } from "next/router"
import { NavLink } from "../elements/link"
import Logo from "../elements/logo"
import Nav from "./nav"
import SocialLinks from "../elements/socialLinks"
import DownloadCv from "../elements/downloadCv"
import { useMedia } from "../../providers/mediaContext"
import { routesMobile } from "../../config/navRoutes"

function NavMobile({ className }) {
  const router = useRouter()
  const [openNavModal, setOpenNavModal] = useState(false)
  return (
    <div className={`fixed left-0 h-auto w-screen z-[1] ${className}`}>
      <Logo className="pl-[20px]" />
      <div
        onClick={() => setOpenNavModal(!openNavModal)}
        className="flex absolute justify-center items-center cursor-pointer top-[5px] right-[20px] h-[30px] w-[30px]"
      >
        <img
          alt="Arrow down"
          className="object-contain bg-no-repeat bg-contain w-[20px]"
          src="./../../icons/menu-burger.svg"
        />
      </div>
      <div
        className={`absolute top-[-20px] left-0 z-50 w-1/4 h-screen bg-[#2a2929]/[.5] flex flex-col justify-center transition-all ${
          openNavModal ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        onClick={() => setOpenNavModal(false)}
      ></div>
      <div
        className={`absolute top-[-20px] right-0 z-50 w-3/4 h-screen bg-[#2a2929] flex flex-col justify-center transition-all ${
          openNavModal ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <img
          alt="Arrow down"
          className="absolute top-[30px] right-[20px] object-contain bg-no-repeat bg-contain w-[20px]"
          src="./../../icons/close-nav-cross.svg"
          onClick={() => setOpenNavModal(false)}
        />
        <ul className={`pl-6 text-neutral-50 ${className}`}>
          {routesMobile.map(({ name, path }) => (
            <li key={name} className="flex justify-start w-full">
              <NavLink
                href={path}
                name={name}
                active={path === routesMobile.route}
              />
            </li>
          ))}
        </ul>
        <SocialLinks title />
        <DownloadCv />
      </div>
    </div>
  )
}
export default NavMobile
