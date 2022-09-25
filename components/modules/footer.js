import { Fragment } from "react";
import Translation from "../elements/translation";
import AboutThisWebsite from "../elements/aboutThisWebsite";

function Footer() {
  return (
    <div className="w-full mt-[55px] fixed bottom-[20px] left-[30px] z-[1]">
      <Translation />
      <AboutThisWebsite />
    </div>
  );
}

export default Footer;
