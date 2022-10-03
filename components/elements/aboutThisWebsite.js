import Link from "next/link"

function AboutThisWebsite({ className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link href="/more-about-this-website" passHref>
        <a
          href="/more-about-this-website"
          alt="More about this website"
          className="hover:text-white text-grey text-[14px]"
        >
          More about this website
        </a>
      </Link>
    </div>
  )
}

export default AboutThisWebsite
