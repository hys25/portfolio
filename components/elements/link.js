import Link from "next/link"
import styled from "styled-components"
import { useMedia } from "../../providers/mediaContext"

const StyledLink = styled.a`
  writing-mode: vertical-rl;
  text-orientation: upright;
`

function NavLink({ href, name, active, className }) {
  const { xl } = useMedia()
  return (
    <Link href={href} passHref>
      {xl ? (
        <a
          href={href}
          className={`relative transition-colors uppercase pb-6 w-min text-[16px] hover:text-white whitespace-nowrap ${
            active ? "text-white " : "text-grey"
          } ${className}`}
        >
          {name}
          {active && (
            <div className="absolute top left-2 block bg-white h-[70%] w-[1px]" />
          )}
        </a>
      ) : (
        <StyledLink
          className={`relative transition-colors uppercase pb-4 w-min text-[12px] hover:text-white tracking-wide ${
            active ? "text-white " : "text-grey"
          } ${className}`}
        >
          {name}
          {active && (
            <div className="absolute top-2 left-2 block bg-white h-[70%] w-[1px]" />
          )}
        </StyledLink>
      )}
    </Link>
  )
}

export { NavLink, StyledLink }
