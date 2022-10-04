import React, { useContext, useMemo } from "react"
import { BREAKPOINTS, useMediaQuery } from "../hooks/useMediaQuery"

export const MediaContext = React.createContext()

export function useMedia() {
  return useContext(MediaContext)
}

export function MediaProvider({ children }) {
  const xl = useMediaQuery(BREAKPOINTS.xl)
  const xs = useMediaQuery(BREAKPOINTS.xs)
  const mediaQueries = useMemo(
    () => (xl === null && xs === null ? { xl: false, xs: false } : { xl, xs }),
    [xl, xs]
  )
  return (
    <MediaContext.Provider value={mediaQueries}>
      {children}
    </MediaContext.Provider>
  )
}
