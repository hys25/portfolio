import { useForm } from "react-hook-form"
import { useState } from "react"
import { NextSeo } from "next-seo"
import Typewriter from "typewriter-effect"
import Default from "../../components/layout/default"
import { Input, Textarea } from "../../components/elements/input"
import { post } from "../../lib/api"
import { NEXT_PUBLIC_BE_HOST } from "../../config"

function Contact() {
  const [isSubmitSuccess, setSubmitSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const handleSearchSubmit = async (data) => {
    await post(`${NEXT_PUBLIC_BE_HOST}/message`, data)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => {
      setSubmitSuccess(false)
    }, 5000)
  }
  return (
    <Default>
      <NextSeo
        title="Contact with Halyna Yavtushenko"
        description="Reach me out on Linkedin or through the form on the Contact page"
      />
      <form
        onSubmit={handleSubmit(handleSearchSubmit)}
        method="post"
        className="flex fixed top-0 right-0 flex-col w-1/3 h-full md:w-full lg:w-1/2"
      >
        <div className="flex w-full h-1/3">
          <div className="flex relative items-end mr-1 w-1/2 h-full">
            <Input
              {...register("first_name", { required: true })}
              className="pb-3 w-full text-white h-[60px] bg-greyDark"
              placeholder="First name"
              error={errors.first_name ? "First name is required" : null}
            />
            <div className="block absolute left-0 w-full h-full top-[-screen] z-[-1] bg-greyDark" />
          </div>
          <div className="flex relative items-end ml-1 w-1/2 h-full max-h-1/3">
            <Input
              {...register("last_name", { required: true })}
              className="pb-3 w-full text-white h-[60px] bg-greyDark"
              placeholder="Last name"
              error={errors.last_name ? "First name is required" : null}
            />
            <div className="block absolute left-0 w-full h-full top-[-screen] z-[-1] bg-greyDark" />
          </div>
        </div>
        <div className="flex mt-2 w-full h-[60px]">
          <div className="relative w-full h-full">
            <Input
              {...register("email", { required: true })}
              className="w-full h-full text-white bg-greyDark min-h-[60px]"
              placeholder="Email"
              error={errors.email ? "First name is required" : null}
            />
          </div>
        </div>
        <div className="flex mt-2 w-full h-auto">
          <div className="relative w-full h-full">
            <Textarea
              {...register("message", { required: true })}
              placeholder="Message"
              error={errors.message ? "First name is required" : null}
            />
            <div className="absolute top-[100%] z-1 block bg-greyDark left-0 w-full h-full" />
          </div>
        </div>
        {isSubmitSuccess && (
          <div className="absolute right-0 w-full text-center cursor-pointer text-grey bottom-[180px]">
            <b>THANK YOU!</b> <div>Your message has been sent.</div>
          </div>
        )}
        <button
          type="submit"
          className="absolute right-0 w-full text-white uppercase cursor-pointer bottom-[90px] h-[60px] bg-grey"
        >
          send message
        </button>
      </form>
      <div className="absolute md:hidden bottom-[90px] left-[90px] w-[80px] h-[225px]">
        <img
          alt="Arrow down"
          className="object-contain w-full bg-no-repeat bg-contain animate-pulse rotate-[-10deg]"
          src="./../../icons/arrow-left-white.svg"
        />
      </div>
      <div className="absolute font-light whitespace-pre-line md:hidden bottom-[90px] left-[180px] w-[600px] h-[224px] text-grey font-[12px]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                "I'm always happy to make new friends, face new challenges and to have some fun. Feel free to say hi! 👋           "
              )
              .pauseFor(1000)
              .typeString(
                " Reach me out on Linkedin or through the form on the right 👉"
              )
              .start()
          }}
        />
      </div>
    </Default>
  )
}
export default Contact
