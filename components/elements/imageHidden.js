import { useEffect } from "react"
import { useMedia } from "../../providers/mediaContext"

function ImageHidden({ mousePosition, setMousePosition }) {
  const { xl } = useMedia()

  useEffect(() => {
    const image = document.getElementById("image")
    const boundaries = image.getBoundingClientRect()
    const handler = (event) => {
      image.style.setProperty("--x", `${event.clientX - boundaries.left}px`)
      image.style.setProperty("--y", `${event.clientY - boundaries.top}px`)
      setMousePosition({ top: event.clientX, left: event.client })
    }

    document.addEventListener("mousemove", handler)
    return () => {
      document.removeEventListener("mousemove", handler)
    }
  })

  return (
    <div className="xl:hidden">
      <div
        className="fixed rounded-full w-[300px] h-[300px] z-[-2] md:w-[100px] md:h-[100px]"
        style={{ transform: "translate(-50%, -50%)", ...mousePosition }}
      />
      <div className="relative left-0 top-[-100px] h-[410px] w-[450px] md:h-[200px] md:w-[160px] md:top-[80px] md:left-[-100px]">
        <img
          id="image"
          src="/hello-pic.png"
          alt="Author"
          width={450}
          height={410}
          className="object-contain absolute top-0 left-0 z- md:h-[200px] md:w-[160px]"
          style={
            xl
              ? {
                  clipPath: "circle(50px at var(--x, -100%) var(--y, -100%))",
                }
              : {
                  clipPath: "circle(150px at var(--x, -100%) var(--y, -100%))",
                }
          }
        />
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-blackCustom opacity-0" />
      </div>
    </div>
  )
}

export default ImageHidden;