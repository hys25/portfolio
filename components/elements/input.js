import { useState } from "react";
import Image from "next/image";

function StyledInput({ placeholder, className, ...props }) {
  return (
    <input
      placeholder={placeholder}
      className={`px-5 w-full text-[14px] appearance-none focus:outline-none ${className}`}
      {...props}
    />
  );
}

export function Input({
  setValue,
  value,
  className,
  classNameWrapper,
  children,
  placeholder,
  type = "text",
  showSearchIcon = false,
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
  );
}

export function FormInput({
  setValue,
  label,
  type = "text",
  className,
  children,
  disabled = false,
  valid,
  ...props
}) {
  let classes = `pr-12 pl-3 w-full h-[48px] text-xs rounded-md appearance-none border border-grey bg-white focus:outline-none font-bold`;
  if (disabled) {
    classes += "text-coolGrey bg-paleGrey";
  }
  return (
    <div className="flex relative items-center w-full text-black">
      {label && (
        <label
          className="absolute left-0 -top-5 text-xs text-marine"
          htmlFor="formInput"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        id="formInput"
        className={`${classes} ${className}`}
        disabled={disabled}
        {...props}
      />
      <div className="absolute top-3 mr-1 max-h-5 cursor-pointer right-[-30px]">
        {valid && (
          <Image width={20} height={20} src="/icons/check-mark-24.svg" />
        )}
      </div>
    </div>
  );
}

export function PasswordInput({
  setValue,
  className,
  password = false,
  ...props
}) {
  const [type, setType] = useState("password");
  return (
    <div className={`relative flex items-center ${className}`}>
      <FormInput
        type={type}
        onChange={(e) => setValue(e.target.value)}
        id="passwordInput"
        {...props}
      />
      <div className="absolute right-4 mr-1 max-h-5 cursor-pointer">
        {type === "password" ? (
          <Image
            onClick={(e) => setType("text")}
            width={20}
            height={20}
            src="/icons/icon-eye-24-closed.svg"
          />
        ) : (
          <Image
            onClick={(e) => setType("password")}
            width={20}
            height={20}
            src="/icons/icon-eye-24.svg"
          />
        )}
      </div>
    </div>
  );
}

export function Textarea({
  onChange,
  labelText,
  className,
  children,
  valid,
  disabled = false,
  ...props
}) {
  return (
    <div className="flex relative flex-col w-full">
      <label className="text-[12px] text-marine mb-[4px]" htmlFor="message">
        {labelText}
      </label>
      <textarea
        onChange={(e) => onChange(e.target.value)}
        id="formInput"
        className={`mb-6 w-full border border-grey rounded-4 h-auto min-h-[257px] pt-2 pl-3 md:min-h-[157px] ${className}`}
        disabled={disabled}
        {...props}
      />
      <div className="absolute top-3 mr-1 max-h-5 cursor-pointer right-[-30px]">
        {valid && (
          <Image width={20} height={20} src="/icons/check-mark-24.svg" />
        )}
      </div>
    </div>
  );
}
