import { useRouter } from "next/router"
import { NavLink } from "../elements/link"

function Nav() {
  const router = useRouter()
  // const routes = ["about", "contact", "projects"];
  const routes = [
    {
      name: "about",
      path: "/about",
    },
    {
      name: "contact",
      path: "/contact",
    },
    {
      name: "projects",
      path: "/",
    },
  ]

  return (
    <ul className="flex flex-col items-center pt-4 pl-6 text-neutral-50 max-w-[47px]">
      {routes.map(({ name, path }) => (
        <li key={name} className="flex justify-center w-full">
          <NavLink href={path} name={name} active={path === router.route} />
        </li>
      ))}
    </ul>
  )
}

export default Nav
