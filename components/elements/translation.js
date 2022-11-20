function Translation({ className }) {
  return (
    <div className={`fixed flex w-fit ${className}`}>
      {/* <div className="mr-4 ml-2 text-white transition-colors cursor-pointer">
        EN
      </div>
      <div className="text-white transition-colors cursor-pointer">UA</div> */}
      <div className="flex ml-7 text-white text-[14px]">
        FRONT_END ENGINEER
        <span className="text-white animate-pulse">_</span>
      </div>
    </div>
  )
}

export default Translation
