import Default from "../../components/layout/default"

function MoreAboutThisWebsite() {
  return (
    <Default>
      <div className="flex mx-auto w-full text-white mt-[150px] max-w-[1200px] md:mt-[80px] md:flex-col">
        <div className="flex flex-col w-2/3 md:m-full md:mb-4">
          Website description
        </div>
        <div className="flex flex-col w-1/3 md:m-full">
          Full Features List :
        </div>
      </div>
    </Default>
  )
}
export default MoreAboutThisWebsite
