import React, { useState } from 'react'

import Input from '../../Input'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={({ target: { value } }) => {
          setEmail(value)
        }}
      />
      <button onClick={() => props.cb('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
