import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <>

         <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
    <a className="navbar-brand" href="#">M</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse active" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Sample </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Layouts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Our Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buy Theme</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          < FontAwesomeIcon icon={faSearch} className="nav-link"/>
          </a>
        </li>
      </ul>
    
    </div>
  </nav>


    
      
    </>
  )
}

export default Header
