import Link from "next/link"
import styled from "styled-components"

const StyledLink = styled.a`
  writing-mode: vertical-rl;
  text-orientation: upright;
`

function NavLink({ href, name, active, className }) {
  return (
    <Link href={href} passHref>
      <StyledLink
        className={`transition-colors uppercase pb-4 w-min text-[12px] hover:text-white tracking-wide ${
          active ? "text-white " : "text-grey"
        } ${className}`}
      >
        {name}
      </StyledLink>
    </Link>
  )
}

export { NavLink, StyledLink }
