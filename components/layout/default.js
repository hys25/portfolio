import Sidebar from "../modules/sidebar"
import Footer from "../modules/footer"

function Default({ children }) {
  return (
    <div className="flex flex-col justify-between pt-5 pr-10 w-screen h-screen bg-neutral-900 pb-[70px] pl-[190px]">
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Default
