import { useRouter } from "next/router"
import { NavLink } from "../elements/link"
import { routes } from "../../config/navRoutes"

function Nav({ className = "" }) {
  const router = useRouter()

  return (
    <ul
      className={`flex flex-col items-center pt-4 pl-6 text-neutral-50 max-w-[47px] ${className}`}
    >
      {routes.map(({ name, path }) => (
        <li key={name} className="flex justify-center w-full">
          <NavLink href={path} name={name} active={path === router.route} />
        </li>
      ))}
    </ul>
  )
}

export default Nav
