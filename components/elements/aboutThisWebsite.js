import Link from "next/link"

function AboutThisWebsite({ className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link href="/more-about-this-website" passHref>
        <a
          href="/more-about-this-website"
          alt="Designed & Built by Halyna Yavtushenko"
          className="hover:text-white text-grey text-[14px]"
        >
          Designed & Built by Halyna Yavtushenko
        </a>
      </Link>
    </div>
  )
}

export default AboutThisWebsite
