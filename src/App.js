import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppNavBar } from './components/Navigation'
import { Home } from './components/Home'
import { About } from './components/About'
import { ProjectDetail } from './components/ProjectDetail'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { ContactForm } from './components/ContactForm'
import { FormSuccess } from './components/FormSuccess'

function App () {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/project/:id' component={ProjectDetail} />
        <Route exact path='/contact' component={ContactForm} />
        <Route path='/forms/success' component={FormSuccess} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
