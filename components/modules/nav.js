import { useRouter } from "next/router";
import Link from "next/link";
import { Fragment } from "react";
import { NavLink } from "../elements/link";

function Nav({ children, href }) {
  const router = useRouter();
  const routes = ["about", "contact", "projects"];
  const filteredRoutes = routes.filter(
    (link) => link !== router.pathname.replace("/", "")
  );
  return (
    <ul className="flex flex-col items-center text-neutral-50 pl-6 pt-4 max-w-[47px]">
      {filteredRoutes.map((link) => (
        <li key={link} className="w-full flex justify-center">
          <NavLink href={`/${link}`} name={link} />
        </li>
      ))}
    </ul>
  );
}

export default Nav;
