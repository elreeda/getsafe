import React, { useState } from 'react'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import FullnameStep from './FullnameStep'
import SummaryStep from './SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
  designerIns = 'designer_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
  [ProductIds.designerIns]: 'Designer Insurance',
}

const PRODUCT_FLOWS = {
  [ProductIds.devIns]: [EmailStep, AgeStep],
  [ProductIds.designerIns]: [EmailStep, AgeStep, FullnameStep],
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
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default Buyflow
