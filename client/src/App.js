import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" />
        <Route path="/about" />
        <Router path="projects" />
        <Route path="/project/:id" />
      </Switch>
    </Router>
  );
}

export default App;
