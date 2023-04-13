import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<HomePage/>} path="/" exact/>
          </Route>
          <Route element={<LoginPage/>} path="/login"  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
