import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-brand-dark"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 outline-none px-2 focus:ring-1 focus:ring-brand-dark"
          {...props}
        />
      </div>
    </div>
  )
}

export default Input
