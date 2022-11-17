import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

function AboutThisWebsite({ className }) {
  const router = useRouter()
  const [isSubmitSuccess, setSubmitSuccess] = useState(false)
  useEffect(() => {
    if (router.route === "/more-about-this-website") {
      setSubmitSuccess(true)
    }
  }, [setSubmitSuccess, router])
  return (
    <div className={`flex justify-center ${className}`}>
      <Link href="/more-about-this-website" passHref>
        <a
          href="/more-about-this-website"
          alt="Designed & Built by Halyna Yavtushenko"
          className={`relative w-max flex text-[14px] transition-all hover:text-white after:absolute after:inline-block after:w-[14px] after:h-[14px] after:bg-[url('/icons/arrow-top-right-grey.svg')] after:right-[-16px] after:bottom-[3px] after:bg-no-repeat after:bg-contain hover:after:bg-[url('/icons/arrow-top-right-white.svg')] ${
            isSubmitSuccess
              ? "text-white after:bg-[url('/icons/arrow-top-right-white.svg')]"
              : "text-grey"
          }`}
        >
          Designed & Built by Halyna Yavtushenko
          {isSubmitSuccess && (
            <div className="absolute bottom-[8px] left-[10px] block bg-white h-[0.5px] w-[90%]" />
          )}
        </a>
      </Link>
    </div>
  )
}

export default AboutThisWebsite
