function StyledInput({ placeholder, className, ...props }) {
  return (
    <input
      placeholder={placeholder}
      className={`px-5 w-full text-[14px] appearance-none focus:outline-none ${className}`}
      {...props}
    />
  )
}

export function Input({
  setValue,
  value,
  className,
  classNameWrapper,
  children,
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <div
      {...props}
      className={`flex relative items-center text-black ${classNameWrapper}`}
    >
      <StyledInput
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={className}
        placeholder={placeholder}
      />
      {children || null}
    </div>
  )
}
