import React from 'react'

import { ProductIds } from '../types/product'
import { PRODUCT_IDS_TO_NAMES } from '../utils/constants'
import Buyflow from '../components/Buyflow'

interface InsurancePageProps {
  productId: ProductIds
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ productId }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold font-montserrat mt-8 mb-6">
        Buying {PRODUCT_IDS_TO_NAMES[productId]}
      </h2>
      <div className="max-w-lg">
        <Buyflow productId={productId} />
      </div>
    </div>
  )
}

export default InsurancePage
