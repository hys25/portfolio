import Sidebar from "../modules/sidebar"
import Footer from "../modules/footer"

function Default({ children }) {
  return (
    <div className="flex flex-col justify-between pt-5 pr-10 w-screen h-screen md:justify-start md:px-5 md:min-h-screen bg-neutral-900 pb-[70px] pl-[190px] md:py-[20px] md:min-w-screen">
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Default
