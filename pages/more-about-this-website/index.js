import Default from "../../components/layout/default"

function MoreAboutThisWebsite() {
  return (
    <Default>
      <div className="flex mx-auto w-full text-white mt-[150px] max-w-[1200px]">
        <div className="flex flex-col w-2/3">Website description</div>
        <div className="flex flex-col w-1/3">Full Features List :</div>
      </div>
    </Default>
  )
}
export default MoreAboutThisWebsite
