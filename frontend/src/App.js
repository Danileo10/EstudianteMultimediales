import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import EventoList from './components/Eventos';
import ActividadesList from './components/AsistenciaActividad';
import StudentProfile from './components/Perfil';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render = { props => (<Login {...props}/>) }></Route>
          <Route path="/home" exact render = { props => (<Home {...props}/>) }></Route>
          <Route path="/eventos" component={EventoList} />
          <Route path="/actividades" component={ActividadesList} />
          <Route path="/perfil" component={StudentProfile} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
