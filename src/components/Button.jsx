import React from "react";
const animated ="transition duration-150 hover:shadow-lg hover:-translate-y-1 active:shadow-xl active:translate-y-0 transform focus:outline-none";

const base = "px-7 py-2 text-base font-medium rounded-full cursor-pointer";

const variants = {
  primary: `bg-blue-600 hover:bg-blue-700 text-white ${base}`,            
  outline: `border border-blue-600 text-blue-600 hover:bg-blue-50 ${base}`,
  ghost: `bg-white text-black hover:bg-gray-100 ${base} shadow`,
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`${variants[variant]} ${animated} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
