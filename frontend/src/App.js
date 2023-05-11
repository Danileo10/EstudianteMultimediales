import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import EventoList from './components/Eventos';
import EventosxPrograma from './components/EventosxPrograma';
import ActividadesList from './components/AsistenciaActividad';
import StudentProfile from './components/Perfil';
import EditarPerfil from './components/EditarPerfil';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render = { props => (<Login {...props}/>) }></Route>
          <Route path="/home" exact render = { props => (<Home {...props}/>) }></Route>
          <Route path="/eventos" component={EventoList} />
          <Route path="/eventosxprograma" component={EventosxPrograma} />
          <Route path="/actividades" component={ActividadesList} />
          <Route path="/perfil" component={StudentProfile} />
          <Route path="/editarperfil" component={EditarPerfil} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
