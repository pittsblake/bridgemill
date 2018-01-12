import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route
                exact path="/"
                component={Main}
              />

            </Switch>
        </Router>
    );
  }
}

export default App;
