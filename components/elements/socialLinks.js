import Link from "next/link"

function SocialLinks({ className = "", title = "" }) {
  return (
    <div
      className={`flex flex-col items-center pl-6 mb-5 w-[50px] md:mb-0 ${className}`}
    >
      <Link href="https://github.com/hys25" passHref>
        <a
          href="https://github.com/hys25"
          alt="github"
          target="_blank"
          className={`relative h-6 w-6 text-grey before:block before:absolute before:w-6 before:h-6 before:transition-all before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-github.png')] mb-6 transition-all ${
            title
              ? "flex before:bottom-0 uppercase before:left-0  before:top-1 w-full pl-8 before:bg-[url('/icons/link-github-grey.svg')] md:before:mb-0 md:text-[14px] md:before:w-4 md:before:h-4"
              : "before:bottom-0 before:right-0 w-6 indent-[100%] whitespace-nowrap overflow-hidden"
          }`}
          rel="noreferrer"
        >
          <img
            alt="Arrow down"
            className="block object-contain w-6 h-6 bg-no-repeat bg-contain"
            src="./../../icons/link-github-grey.svg"
          />
          Github
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/halyna-yavtushenko/" passHref>
        <a
          href="https://www.linkedin.com/in/halyna-yavtushenko/"
          alt="linkedin"
          target="_blank"
          className={`relative h-6 w-6 text-grey before:block before:absolute before:w-6 before:h-6 before:transition-all before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/link-linkedin.png')] mb-6 transition-all ${
            title
              ? "flex before:bottom-[6px] uppercase before:left-0 before:top-0 w-full pl-8 before:bg-[url('/icons/link-linkedin-grey.svg')] md:before:mb-0 md:text-[14px] md:before:w-4 md:before:h-4"
              : "before:bottom-0 before:right-0 w-6 indent-[100%] whitespace-nowrap overflow-hidden"
          }`}
          rel="noreferrer"
        >
          <img
            alt="Arrow down"
            className="object-contain w-6 h-6 bg-no-repeat bg-contain"
            src="./../../icons/link-linkedin-grey.svg"
          />
          Linkedin
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
