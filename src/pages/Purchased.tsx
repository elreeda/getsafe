import React from 'react'
import { Redirect, Link, useParams } from 'react-router-dom'
import { PRODUCT_IDS_TO_NAMES } from '../utils/constants'
import { ProductIds } from '../types/product'

import Button from '../components/Button'

const Purchased = () => {
  const { productId } = useParams<{ productId: ProductIds }>()

  if (!productId || !PRODUCT_IDS_TO_NAMES[productId]) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold font-montserrat mt-8 mb-6">
        Congratulations
      </h2>
      <p>
        You have successfully purchased <b>{PRODUCT_IDS_TO_NAMES[productId]}</b>
        !
      </p>
      <div className="mt-4">
        <Link to="/">
          <Button>Browse insurances</Button>
        </Link>
      </div>
    </div>
  )
}

export default Purchased
