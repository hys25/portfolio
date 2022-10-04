import { useEffect, useState } from "react"

function getStrMaxWidth(width) {
  return `(max-width: ${width}px)`
}

export const BREAKPOINTS = {
  xl: getStrMaxWidth(1279),
  xs: getStrMaxWidth(375),
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    null === matches && setMatches(window.matchMedia(query).matches)
    const media = window.matchMedia(query)

    if (media.matches !== matches) setMatches(media.matches)

    const listener = () => {
      setMatches(media.matches)
    }

    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [query, matches])

  return matches
}
