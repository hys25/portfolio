import Link from "next/link"

function Logo() {
  return (
    <Link href="/">
      <a
        href="/"
        className="text-9xl text-neutral-50 font-fancy md:text-[28px]"
      >
        G
        <span className="text-4xl tracking-wider text-neutral-50 font-fancy md:text-[28px]">
          alinie
        </span>
      </a>
    </Link>
  )
}

export default Logo
