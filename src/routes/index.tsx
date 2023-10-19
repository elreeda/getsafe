import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Insurance from '../pages/Insurance'
import Purchased from '../pages/Purchased'
import { ProductIds } from '../types/product'
import logo from '../logo.svg'

const AppRoutes = () => {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route path="/buy/insurance_dev">
          <Insurance productId={ProductIds.devIns} />
        </Route>
        <Route path="/buy/insurance_designer">
          <Insurance productId={ProductIds.designerIns} />
        </Route>
        <Route path="/purchased/:productId" component={Purchased} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
