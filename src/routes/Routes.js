import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
