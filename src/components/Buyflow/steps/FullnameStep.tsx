import React, { useState } from 'react'

import Input from '../../Input'

interface FullnameStepProps {
  cb: (field: string, value: string) => void
}

const FullnameStep: React.FC<FullnameStepProps> = (props) => {
  const [name, setName] = useState({
    first: '',
    last: '',
  })
  return (
    <>
      <Input
        id="firstName"
        label="First name"
        type="text"
        value={name.first}
        onChange={({ target: { value } }) => {
          setName({ ...name, first: value })
        }}
      />
      <Input
        id="lastName"
        label="Last name"
        type="text"
        value={name.last}
        onChange={({ target: { value } }) => {
          setName({ ...name, last: value })
        }}
      />
      <button onClick={() => props.cb('name', `${name.first} ${name.last}`)}>
        Next
      </button>
    </>
  )
}

export default FullnameStep
