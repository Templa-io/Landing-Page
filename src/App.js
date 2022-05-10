import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import ShowCase from './components/ShowCase'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Footer from './components/Footer'
import Experience from './components/Experience'


function App() {
  return (
    <Router>
      <Header/>


    <Route exact to="/" >
      <ShowCase/>
      <Experience/>
    </Route>
    <Footer/>

  
    </Router>
    

  );
}

export default App;
