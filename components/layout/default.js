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
    <div className="flex relative flex-col justify-between pt-5 pr-10 w-screen h-screen md:justify-start md:px-5 md:min-h-screen bg-neutral-900 pb-[70px] pl-[190px] md:py-[20px] md:min-w-screen">
      {isNdaMessageInStorage ? (
        <div className="absolute top-[10px] right-[calc(50%-380px)] z-10 flex items-end text-white">
          <img
            alt="Arrow down"
            className="object-contain bg-no-repeat bg-contain w-[20px] h-[20px] max-h-[200px] md:right-[1px]"
            src="./../../icons/paw-white.svg"
          />
          <p className="ml-2 text-[14px]">
            Due to NDA, I can&apos;t use assets from projects I&apos;ve worked
            on, so I decided that dogs can help me to fill the gaps
          </p>
        </div>
      ) : (
        <div className="absolute top-[10px] right-[calc(50%-380px)] z-10 flex items-end text-white">
          <img
            alt="Arrow down"
            className="object-contain bg-no-repeat bg-contain w-[20px] h-[20px] max-h-[200px] md:right-[1px]"
            src="./../../icons/paw-white.svg"
          />
          <p className="ml-2 text-[14px]">
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
