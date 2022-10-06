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
          className={`transition-colors uppercase pb-6 w-min text-[16px] hover:text-white whitespace-nowrap ${
            active ? "text-white " : "text-grey"
          } ${className}`}
        >
          {name}
        </a>
      ) : (
        <StyledLink
          className={`transition-colors uppercase pb-4 w-min text-[12px] hover:text-white tracking-wide ${
            active ? "text-white " : "text-grey"
          } ${className}`}
        >
          {name}
        </StyledLink>
      )}
    </Link>
  )
}

export { NavLink, StyledLink }
