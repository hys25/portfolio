import Translation from "../elements/translation"
import AboutThisWebsite from "../elements/aboutThisWebsite"

function Footer() {
  return (
    <div className="flex fixed w-full md:hidden mt-[55px] bottom-[20px] left-[30px] z-[1]">
      <Translation />
      <AboutThisWebsite />
    </div>
  )
}

export default Footer
