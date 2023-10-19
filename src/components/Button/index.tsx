import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="rounded-lg px-4 outline-none transition duration-300 ease-in-out hover:opacity-70 active:opacity-70 h-12 text-white bg-brand-dark"
      {...props}
    >
      <span className="text-sm uppercase leading-7 text-left text-white">
        {children}
      </span>
    </button>
  )
}

export default Button
