import React, { useState } from 'react'

import EmailStep from './steps/EmailStep'
import AgeStep from './steps/AgeStep'
import FullnameStep from './steps/FullnameStep'
import Summary from './steps/Summary'

import { ProductIds } from '../../types/product'

interface BuyflowProps {
  productId: ProductIds
}

const PRODUCT_FLOWS = {
  [ProductIds.devIns]: [EmailStep, AgeStep],
  [ProductIds.designerIns]: [EmailStep, AgeStep, FullnameStep],
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [collectedData, updateData] = useState({ email: '', age: 0 })
  const handleNextStep = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const handlePrevStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }

  const CurrentStepComponent = PRODUCT_FLOWS[props.productId][currentStepIndex]
  return (
    <div>
      {PRODUCT_FLOWS[props.productId].length > currentStepIndex ? (
        <CurrentStepComponent
          onNext={handleNextStep}
          onPrev={currentStepIndex > 0 ? handlePrevStep : undefined}
        />
      ) : (
        <Summary collectedData={collectedData} productId={props.productId} />
      )}
    </div>
  )
}

export default Buyflow
