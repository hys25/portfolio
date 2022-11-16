import Link from "next/link"

function SocialLinks({ className, title = null }) {
  return (
    <div
      className={`flex flex-col items-center pl-6 mb-5 w-[50px] ${className}`}
    >
      <Link href="https://github.com/hys25" passHref>
        <a
          href="https://github.com/hys25"
          alt="github"
          target="_blank"
          className={`relative h-6 text-grey before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/link-github-grey.svg')] before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-github.png')] mb-6 transition-all  ${
            title
              ? "before:bottom-[5px] uppercase before:left-0 w-full pl-8"
              : "before:bottom-0 before:right-1 w-6 indent-[100%] whitespace-nowrap overflow-hidden"
          }`}
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
          className={`relative h-6 text-grey before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/link-linkedin-grey.svg')] before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-linkedin.png')] mb-2 transition-all  ${
            title
              ? "before:bottom-[6px] uppercase before:left-0 w-full pl-8"
              : "before:bottom-0 before:right-1 w-6 indent-[100%] whitespace-nowrap overflow-hidden"
          }`}
          rel="noreferrer"
        >
          Linkedin
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
