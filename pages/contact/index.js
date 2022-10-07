import { useForm } from "react-hook-form"
import Default from "../../components/layout/default"
import { Input, Textarea } from "../../components/elements/input"

function Contact() {
  const { register, handleSubmit } = useForm()
  const handleSearchSubmit = (data) => {
    console.log(data)
  }
  return (
    <Default>
      <form
        onSubmit={handleSubmit(handleSearchSubmit)}
        method="post"
        className="flex fixed top-0 right-0 flex-col w-1/3 h-full md:w-full lg:w-1/2"
      >
        <div className="flex w-full h-1/3">
          <div className="flex relative items-end mr-1 w-1/2 h-full">
            <Input
              {...register("firstName")}
              className="pb-3 w-full text-white h-[60px] bg-greyDark"
              placeholder="First name"
            />
            <div className="block absolute left-0 w-full h-full top-[-screen] z-[-1] bg-greyDark" />
          </div>
          <div className="flex relative items-end ml-1 w-1/2 h-full max-h-1/3">
            <Input
              {...register("lastName")}
              className="pb-3 w-full text-white h-[60px] bg-greyDark"
              placeholder="First name"
            />
            <div className="block absolute left-0 w-full h-full top-[-screen] z-[-1] bg-greyDark" />
          </div>
        </div>
        <div className="flex mt-2 w-full h-[60px]">
          <div className="w-full h-full">
            <Input
              {...register("email")}
              className="w-full h-full text-white bg-greyDark min-h-[60px]"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex mt-2 w-full h-auto">
          <div className="relative w-full h-full">
            <Textarea {...register("message")} placeholder="Message" />
            <div className="absolute top-[100%] z-1 block bg-greyDark left-0 w-full h-full" />
          </div>
        </div>
        <button
          type="submit"
          className="absolute right-0 w-full text-white uppercase cursor-pointer bottom-[90px] h-[60px] bg-grey"
        >
          send message
        </button>
      </form>
    </Default>
  )
}
export default Contact
