import React from 'react'

import { ProductIds } from '../types/product'
import { PRODUCT_IDS_TO_NAMES } from '../utils/constants'
import Buyflow from '../components/Buyflow'

interface InsurancePageProps {
  productId: ProductIds
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ productId }) => {
  //   const navigate = useNavigate()

  //   const handleFlowSubmit = useCallback(() => {
  //     navigate(`${ROUTES.PURCHASED}/${productId}`)
  //   }, [navigate, productId])

  return (
    <>
      <h2>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h2>
      <Buyflow productId={productId} />
    </>
  )
}

export default InsurancePage
