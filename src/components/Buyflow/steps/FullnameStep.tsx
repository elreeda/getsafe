import React, { useState } from 'react'

import StepWrapper from './StepWrapper'
import Input from '../../Input'

interface FullnameStepProps {
  onNext: (field: string, value: string) => void
  onPrev?: () => void
}

const FullnameStep: React.FC<FullnameStepProps> = (props) => {
  const [name, setName] = useState({
    first: '',
    last: '',
  })
  return (
    <StepWrapper
      onPrev={props.onPrev}
      onNext={() => props.onNext('name', `${name.first} ${name.last}`)}
    >
      <Input
        id="firstName"
        label="First name"
        type="text"
        value={name.first}
        onChange={({ target: { value } }) => {
          setName({ ...name, first: value })
        }}
        required
      />
      <Input
        id="lastName"
        label="Last name"
        type="text"
        value={name.last}
        onChange={({ target: { value } }) => {
          setName({ ...name, last: value })
        }}
        required
      />
    </StepWrapper>
  )
}

export default FullnameStep
