import React from 'react';
import './App.css';
import Login from './routes/login/login';
import Header from './components/header/header';
import Doctors from './routes/doctors/doctors';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DoctorDetails from './routes/doctor-details/doctor-details';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="page-container">
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/doctors/:doctorId">
              <DoctorDetails />
            </Route>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
