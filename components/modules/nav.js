import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import { NavLink } from "../elements/link";

function Nav({ children, href }) {
  const router = useRouter();
  // const routes = ["about", "contact", "projects"];
  const routes = [{
    name: "about",
    path: "/about",
  }, {
    name: "contact",
    path: "/contact",
  }, {
    name: "projects",
    path: "/",
  }];

  return (
    <ul className="flex flex-col items-center text-neutral-50 pl-6 pt-4 max-w-[47px]">
      {routes.map(({name, path}) => (
        <li key={name} className="w-full flex justify-center">
          <NavLink href={path} name={name} active={path === router.route}/>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
