import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/Button'

const Home = () => {
  return (
    <div className="mt-8">
      <h2 className="my-4 text-5xl font-montserrat font-semibold max-w-md uppercase">
        Find the coverage that sets you free
      </h2>
      <div className="mt-8">
        <Link to="/buy/insurance_dev">
          <Button>Get Developer Insurance</Button>
        </Link>
        <Link className="ml-4" to="/buy/insurance_designer">
          <Button>Get Designer Insurance</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
