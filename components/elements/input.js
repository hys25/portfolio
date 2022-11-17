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
  ({ className, children, placeholder, error = null, ...props }, ref) => {
    return (
      <>
        <StyledInput
          ref={ref}
          className={className}
          placeholder={placeholder}
          {...props}
        />
        {children || null}
        {error && (
          <span className="text-error text-[12px] absolute left-[20px] bottom-1 z-1">
            {error}
          </span>
        )}
      </>
    )
  }
)

export const Textarea = React.forwardRef(
  ({ placeholder, className = "", error = null, ...props }, ref) => (
    <>
      <textarea
        placeholder={placeholder}
        className={`w-full h-full p-5 text-white bg-greyDark outline-none ${className}`}
        ref={ref}
        rows={12}
        {...props}
      />
      {error && (
        <span className="text-error text-[12px] absolute left-[20px] top-11 z-100">
          {error}
        </span>
      )}
    </>
  )
)
