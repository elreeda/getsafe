import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../Button'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name?: string
  }
  productId: string
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <div>
      <div>
        {Object.entries(props.collectedData).map(([key, value]) => {
          return (
            <div key={key}>
              {key}: {value || 'N/A'}
            </div>
          )
        })}
      </div>
      <div className="mt-4">
        <Link to={`/purchased/${props.productId}`}>
          <Button>Purchase</Button>
        </Link>
      </div>
    </div>
  )
}

export default SummaryStep
