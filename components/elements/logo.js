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
        <a href="/" className={`flex items-end ${className}`}>
          <img
            alt="Logo"
            className="object-contain bg-no-repeat bg-contain w-[70px] h-[100px] max-h-[200px] md:right-[1px]"
            src="./../../icons/logo-g.svg"
          />
          <span className="text-4xl tracking-wider ml-[-15px] text-neutral-50 font-fancy md:text-[28px]">
            alinie
          </span>
        </a>
      </Link>
    </>
  )
}

export default Logo
