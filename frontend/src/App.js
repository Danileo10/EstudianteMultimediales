import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import EventoList from './components/Eventos';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render = { props => (<Login {...props}/>) }></Route>
          <Route path="/home" exact render = { props => (<Home {...props}/>) }></Route>
          <Route path="/eventos" component={EventoList} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
