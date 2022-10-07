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
  ({ className, children, placeholder, ...props }, ref) => {
    return (
      <>
        <StyledInput
          ref={ref}
          className={className}
          placeholder={placeholder}
          {...props}
        />
        {children || null}
      </>
    )
  }
)

export const Textarea = React.forwardRef(
  ({ placeholder, className = "", ...props }, ref) => (
    <textarea
      placeholder={placeholder}
      className={`w-full h-full p-5 text-white bg-greyDark outline-none ${className}`}
      ref={ref}
      rows={12}
      {...props}
    />
  )
)
