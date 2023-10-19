import React, { useState } from 'react'

import Summary from './steps/Summary'
// import StepWrapper from './steps/StepWrapper'

import { ProductIds } from '../../types/product'
import { PRODUCT_IDS_TO_NAMES, PRODUCT_FLOWS } from '../../utils/constants'

interface BuyflowProps {
  productId: ProductIds
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    name: '',
  })
  const getStepCallback = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const CurrentStepComponent = PRODUCT_FLOWS[props.productId][currentStepIndex]
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>

      {PRODUCT_FLOWS[props.productId].length > currentStepIndex ? (
        <CurrentStepComponent cb={getStepCallback} />
      ) : (
        <Summary collectedData={collectedData} productId={props.productId} />
      )}
    </>
  )
}

export default Buyflow
