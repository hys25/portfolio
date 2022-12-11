import Link from "next/link"
import { LogoJsonLd } from "next-seo"

function Logo({ className }) {
  return (
    <>
      <LogoJsonLd
        logo="https://galinie.ca/icons/logo-g.svg"
        url="https://galinie.ca/"
      />
      <Link href="/">
        <a
          href="/"
          className={`flex items-end ml-2 mb-[20px] md:ml-0 md:mb-0 md:w-[85px] ${className}`}
        >
          <img
            alt="Logo"
            className="object-contain bg-no-repeat bg-contain w-[100px] h-[80px] md:right-[1px] md:w-[65px] md:h-[60px]"
            src="./../../icons/logo-galinie.svg"
          />
        </a>
      </Link>
    </>
  )
}

export default Logo
