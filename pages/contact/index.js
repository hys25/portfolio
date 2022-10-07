import { useState } from "react"
import Default from "../../components/layout/default"
import { Input } from "../../components/elements/input"

function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Default>
      <form
        onSubmit={handleSearchSubmit}
        method="post"
        className="flex fixed top-0 right-0 flex-col w-1/3 h-full md:w-full"
      >
        <div className="flex w-full h-1/3">
          <div className="flex items-end mr-1 w-1/2 h-full">
            <Input
              type="text"
              value={firstName}
              setValue={setFirstName}
              className="w-full h-full pb-3 pt-[100%] text-white bg-greyDark"
              classNameWrapper="w-full h-full"
              placeholder="First name"
            />
          </div>
          <div className="flex items-end ml-1 w-1/2 h-full">
            <Input
              type="text"
              value={lastName}
              setValue={setLastName}
              className="w-full h-full pb-3 pt-[100%] text-white bg-greyDark"
              classNameWrapper="w-full h-full"
              placeholder="First name"
            />
          </div>
        </div>
        <div className="flex mt-2 w-full h-[60px]">
          <div className="w-full h-full">
            <Input
              type="text"
              value={firstName}
              setValue={setFirstName}
              className="w-full h-full text-white bg-greyDark min-h-[60px]"
              classNameWrapper="w-full h-full"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex mt-2 w-full h-auto">
          <div className="w-full h-full">
            <Input
              type="text"
              value={firstName}
              setValue={setFirstName}
              className="w-full h-full pt-3 pb-[100%] text-white bg-greyDark"
              classNameWrapper="w-full h-full"
              placeholder="Message"
            />
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
