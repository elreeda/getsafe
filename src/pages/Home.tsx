import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Welcome to Getsafe Insurance</p>
      <div>
        <Link to="/buy/insurance_dev">Get Developer Insurance</Link>
      </div>
      <div>
        <Link to="/buy/insurance_designer">Get Designer Insurance</Link>
      </div>
    </div>
  )
}

export default Home
