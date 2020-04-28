import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageHome from '../pages/Home.jsx'
import PageNotFound from '../pages/NotFound.jsx'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={PageHome} exact />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
