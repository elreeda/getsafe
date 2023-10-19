import React from 'react'
import { Redirect, Link, useParams } from 'react-router-dom'
import { PRODUCT_IDS_TO_NAMES } from '../utils/constants'
import { ProductIds } from '../types/product'

const Purchased = () => {
  const { productId } = useParams<{ productId: ProductIds }>()

  if (!productId || !PRODUCT_IDS_TO_NAMES[productId]) {
    return <Redirect to="/" />
  }

  return (
    <>
      <h1>Congratulations</h1>
      <p>
        You have successfully purchased <b>{PRODUCT_IDS_TO_NAMES[productId]}</b>
        !
      </p>
      <Link to="/">Buy more insurances</Link>
    </>
  )
}

export default Purchased
