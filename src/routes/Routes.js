import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PageHome from '../pages/PageHome.jsx'
import PageNotFound from '../pages/PageNotFound.jsx'

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
