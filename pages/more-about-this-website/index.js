import Default from "../../components/layout/default"

function MoreAboutThisWebsite() {
  return (
    <Default>
      <div className="flex mx-auto w-full text-white md:flex-col mt-[150px] max-w-[1200px] md:mt-[80px]">
        <div className="flex flex-col w-2/3 md:mb-4 md:m-full">
          Website description
          <a
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-5 after:h-5 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-25px] after:bottom-[2px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio"
          >
            This website repository
          </a>
          <a
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-5 after:h-5 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-25px] after:bottom-[2px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio-admin"
          >
            Admin
          </a>
          <a
            className="w-max flex relative mb-4 text-grey transition-all hover:text-white after:absolute after:inline-block after:w-5 after:h-5 after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-25px] after:bottom-[2px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')]"
            href="https://github.com/hys25/portfolio-backend"
          >
            Backend
          </a>
        </div>
        <div className="flex flex-col w-1/3 md:m-full">
          Full Features List :
        </div>
      </div>
    </Default>
  )
}
export default MoreAboutThisWebsite
