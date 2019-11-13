import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Home } from './components/Home'
import { About } from './components/About'
import { ProjectDetail } from './components/ProjectDetail'

function App () {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project/:id' component={ProjectDetail} />
      </Switch>
    </Router>
  )
}

export default App
