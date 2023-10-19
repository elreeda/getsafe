import React, { useState } from 'react'

import StepWrapper from './StepWrapper'
import Input from '../../Input'

interface AgeStepProps {
  onNext: (field: string, value: number) => void
  onPrev?: () => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <StepWrapper onPrev={props.onPrev} onNext={() => props.onNext('age', age)}>
      <Input
        id="age"
        label="Age"
        type="number"
        value={age}
        min={16}
        max={103}
        onChange={({ target: { value } }) => {
          setAge(Number(value))
        }}
        required
      />
    </StepWrapper>
  )
}

export default AgeStep
