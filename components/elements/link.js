import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

function NavLink({ href, name, className}) {
  return (
    <Link href={href} passHref>
      <StyledLink className={`uppercase pb-4 w-min text-[12px] tracking-wide ${className}`}>{name}</StyledLink>
    </Link>
  );
}

export { NavLink, StyledLink };
