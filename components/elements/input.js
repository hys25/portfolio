import React from "react"

const StyledInput = React.forwardRef(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={`px-5 w-full text-[14px] appearance-none focus:outline-none ${className}`}
        {...props}
      />
    )
  }
)

export const Input = React.forwardRef(
  ({ className, classNameWrapper, children, placeholder, ...props }, ref) => {
    return (
      <div
        className={`flex relative items-center text-black ${classNameWrapper}`}
      >
        <StyledInput
          ref={ref}
          className={className}
          placeholder={placeholder}
          {...props}
        />
        {children || null}
      </div>
    )
  }
)
