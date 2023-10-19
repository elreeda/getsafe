import React from 'react'

import Button from '../../Button'

interface StepWrapperProps {
  children: React.ReactNode
  onNext: () => void
  onPrev?: () => void
}

const StepWrapper: React.FC<StepWrapperProps> = ({ children, ...props }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onNext()
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <div className="flex gap-x-2">
        {props.onPrev ? (
          <Button
            onClick={() => {
              if (props.onPrev) props.onPrev()
            }}
          >
            Previous
          </Button>
        ) : null}
        <Button type="submit">Next</Button>
      </div>
    </form>
  )
}

export default StepWrapper
