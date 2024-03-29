import { useState } from "react"
import { NavLink } from "../elements/link"
import Logo from "../elements/logo"
import SocialLinks from "../elements/socialLinks"
import { routesMobile } from "../../config/navRoutes"

function NavMobile({ className = "" }) {
  const [openNavModal, setOpenNavModal] = useState(false)
  return (
    <div
      className={`fixed top-0 left-0 h-auto w-screen z-[1] md:pt-[40px] md:pb-[10px] md:bg-blackCustom ${className}`}
    >
      <Logo className="pl-[20px]" />
      <div
        onClick={() => setOpenNavModal(!openNavModal)}
        onKeyDown={() => setOpenNavModal(!openNavModal)}
        role="button"
        tabIndex={0}
        className="flex absolute justify-center items-center cursor-pointer top-[5px] right-[20px] h-[30px] w-[30px] md:top-[65px]"
      >
        <img
          alt="Arrow down"
          className="object-contain bg-no-repeat bg-contain w-[20px]"
          src="./../../icons/menu-burger.svg"
        />
      </div>
      <div
        className={`absolute top-[-20px] left-0 z-50 w-1/4 h-screen bg-blackCustom/[.8] flex flex-col justify-center transition-all ${
          openNavModal ? "translate-x-0" : "translate-x-[-100%]"
        }`}
        onClick={() => setOpenNavModal(false)}
        role="presentation"
      />
      <div
        className={`absolute top-[-20px] right-0 z-50 w-3/4 h-screen bg-[#2a2929] flex flex-col justify-center transition-all md:top-0 ${
          openNavModal ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <img
          alt="Arrow down"
          className="object-contain absolute bg-no-repeat bg-contain top-[30px] right-[20px] w-[20px] md:top-[70px] md:right-[25px]"
          src="./../../icons/close-nav-cross.svg"
          onClick={() => setOpenNavModal(false)}
          onKeyDown={() => setOpenNavModal(false)}
          role="presentation"
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
      </div>
    </div>
  )
}
export default NavMobile
