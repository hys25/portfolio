import { useState, Fragment } from "react";
import Default from "../../components/layout/default";
import { Input } from "../../components/elements/input";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Default>
      <form
        onSubmit={handleSearchSubmit}
        method="post"
        className="h-full fixed right-0 w-1/3 top-0 flex flex-col"
      >
        <div className="h-1/3 w-full flex">
          <div className="h-full w-1/2 mr-1 flex items-end">
            <Input
              type="text"
              value={firstName}
              setValue={setFirstName}
              className="w-full h-full pb-3 pt-[100%] text-white bg-greyDark"
              classNameWrapper="w-full h-full"
              placeholder="First name"
            />
          </div>
          <div className="h-full w-1/2 ml-1 flex items-end">
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
        <div className="h-[60px] w-full flex mt-2">
          <div className="h-full w-full">
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
        <div className="h-auto w-full flex mt-2">
          <div className="h-full w-full">
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
          className="absolute right-0 w-full cursor-pointer bottom-[90px] h-[60px] text-white uppercase bg-grey"
        >
          send message
        </button>
      </form>
    </Default>
  );
}
export default Contact;
