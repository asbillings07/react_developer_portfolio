import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" />
        <Router path="projects" />
        <Route path="/project/:id" />
      </Switch>
    </Router>
  );
}

export default App;
