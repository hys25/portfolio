import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
import Sidebar from "../modules/sidebar"
import Footer from "../modules/footer"
import NavMobile from "../modules/navMobile"
import { useMedia } from "../../providers/mediaContext"

function Default({ children }) {
  const { xl } = useMedia()
  const [isNdaMessageInStorage, setNdaMessageInStorage] = useState()
  useEffect(() => {
    setNdaMessageInStorage(sessionStorage.getItem("show_nda_message"))
  }, [])

  return (
    <div className="flex relative flex-col justify-between pt-5 pr-10 w-screen h-screen md:justify-start md:px-5 md:w-full md:min-h-screen bg-neutral-900 pb-[70px] pl-[190px] md:pb-[20px] md:pt-[45px] md:min-w-screen">
      {isNdaMessageInStorage ? (
        <div className="absolute top-[10px] right-[calc(50%-380px)] z-10 flex items-end text-white md:top-[5px] md:right-0 md:items-start md:px-5">
          <img
            alt="Arrow down"
            className="object-contain bg-no-repeat bg-contain w-[20px] h-[20px] max-h-[200px] md:right-[1px] md:max-h-[auto] md:w-[14px] md:h-[14px] md:opacity-[0.5]"
            src="./../../icons/paw-white.svg"
          />
          <p className="ml-2 md:font-thin md:text-center text-[14px] md:text-[10px] md:ml-[3px] md:text-grey">
            Due to NDA, I can&apos;t use assets from projects I&apos;ve worked
            on, so I decided that dogs can help me to fill the gaps
          </p>
        </div>
      ) : (
        <div className="absolute top-[10px] right-[calc(50%-380px)] z-10 flex items-end text-white md:top-[5px] md:right-0 md:items-start md:px-5">
          <img
            alt="Arrow down"
            className="object-contain bg-no-repeat bg-contain w-[20px] h-[20px] max-h-[200px] md:right-[1px] md:w-[14px] md:h-[14px] md:opacity-[0.5]"
            src="./../../icons/paw-white.svg"
          />
          <p className="ml-2 md:font-thin md:text-center text-[14px] md:text-[10px] md:ml-[3px] md:text-grey">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(500)
                  .changeDelay(100)
                  .typeString(
                    "Due to NDA, I can't use assets from projects I've worked on, so I decided that dogs can help me to fill the gaps"
                  )
                  .callFunction(() => {
                    sessionStorage.setItem("show_nda_message", true)
                  })
                  .start()
              }}
            />
          </p>
        </div>
      )}

      {xl ? <NavMobile /> : <Sidebar />}
      {children}
      <Footer />
    </div>
  )
}

export default Default
