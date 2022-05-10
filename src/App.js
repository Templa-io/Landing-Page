import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ShowCase from './components/ShowCase'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import Experience from './components/Experience'



function App() {
  return (
    <Router>
      <Navbar/>


    <Route exact to="/" >
      <ShowCase/>
      <Experience/>
    </Route>
    <Footer/>

  
    </Router>
    

  );
}

export default App;
