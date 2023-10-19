import React, { useState } from 'react'

import Input from '../../Input'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <Input
        id="age"
        label="Age"
        type="number"
        value={age}
        onChange={({ target: { value } }) => {
          setAge(Number(value))
        }}
      />
      <button onClick={() => props.cb('age', age)}>Next</button>
    </>
  )
}

export default AgeStep
