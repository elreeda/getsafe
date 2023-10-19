import React, { useState } from 'react'

import StepWrapper from './StepWrapper'
import Input from '../../Input'

interface EmailStepProps {
  onNext: (field: string, value: string) => void
  onPrev?: () => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <StepWrapper
      onPrev={props.onPrev}
      onNext={() => props.onNext('email', email)}
    >
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={({ target: { value } }) => {
          setEmail(value)
        }}
        required
      />
    </StepWrapper>
  )
}

export default EmailStep
