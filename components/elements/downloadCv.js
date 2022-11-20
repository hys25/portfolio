import { useMedia } from "../../providers/mediaContext"
import { StyledLink } from "./link"

function DownloadCv({ className }) {
  const { xl } = useMedia()
  return xl ? (
    <a
      href="/YavtushenkoHalynaFrontendEngineer.pdf"
      download="frontend-engineer-halyna-yavtushenko"
      target="_blank"
      alt="YavtushenkoHalynaFrontendEngineer.pdf"
      className={`flex flex-wrap justify-start items-center ml-6 ${className}`}
    >
      <div className="transition-colors relative text-[12px] uppercase text-grey hover:text-white before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/download-cv-grey.svg')] before:left-0 before:bottom-[3px] before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/download-cv.png')] whitespace-nowrap pl-8">
        Download cv
      </div>
    </a>
  ) : (
    <StyledLink
      href="/YavtushenkoHalynaFrontendEngineer.pdf"
      download="frontend-engineer-halyna-yavtushenko"
      target="_blank"
      alt="YavtushenkoHalynaFrontendEngineer.pdf"
      className={`flex flex-wrap justify-center items-center ml-6 w-6 mb-[110px] ${className}`}
    >
      <div className="flex transition-colors relative text-[12px] mb-1 uppercase text-grey hover:text-white before:inline-block before:absolute before:w-5 before:h-5 before:hover:transition-all before:bg-[url('/icons/download-cv-grey.svg')] before:right-[-1px] before:bottom-0 before:bg-no-repeat before:bg-contain hover:before:bg-[url('/icons/download-cv.png')]">
        <span className="mb-[20px]">Download cv</span>
        <img
          alt="Arrow down"
          className="object-contain bg-no-repeat bg-contain h-[20px] w-[20px]"
          src="./../../icons/download-cv-grey.svg"
        />
      </div>
    </StyledLink>
  )
}

export default DownloadCv
