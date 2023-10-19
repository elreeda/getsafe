import React, { useState, ReactNode } from 'react'

interface StepWrapperProps {
  cb: (field: string, value: any) => void
  children: (value: any, onChange: (value: any) => void) => ReactNode
}

const StepWrapper = ({ cb, children }: StepWrapperProps) => {
  const [fieldValue, setFieldValue] = useState('')

  const handleInputChange = (value: any) => {
    setFieldValue(value)
  }

  return (
    <div>
      {children(fieldValue, handleInputChange)}
      {/* <button onClick={() => cb()}>Next Step</button> */}
    </div>
  )
}

export default StepWrapper
