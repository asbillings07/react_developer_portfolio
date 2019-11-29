import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppNavBar } from './components/Navigation'
import { Home } from './components/Home'
import { About } from './components/About'
import { ProjectDetail } from './components/ProjectDetail'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App () {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/project/:id' component={ProjectDetail} />
        <Route path='/projects' component={Projects} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
