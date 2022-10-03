import Link from "next/link"

function SocialLinks({ className }) {
  return (
    <div className={`flex flex-col items-center pl-6 mb-5 w-min ${className}`}>
      <Link href="https://github.com/hys25" passHref>
        <a
          href="https://github.com/hys25"
          alt="github"
          target="_blank"
          className="relative h-6 w-6 text-white before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/link-github-grey.svg')] before:right-1 before:bottom-0 before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-github.png')] mb-2 transition-all indent-[100%] whitespace-nowrap overflow-hidden"
          rel="noreferrer"
        >
          Github
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/halyna-yavtushenko/" passHref>
        <a
          href="https://www.linkedin.com/in/halyna-yavtushenko/"
          alt="linkedin"
          target="_blank"
          className="relative h-6 w-6  text-white transition-all before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/link-linkedin-grey.svg')] before:right-1 before:bottom-0 before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-linkedin.png')] indent-[100%] whitespace-nowrap overflow-hidden"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
