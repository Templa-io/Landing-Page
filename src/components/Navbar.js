import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">M</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Sample</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Layouts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Buy Theme</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          < FontAwesomeIcon icon={faSearch} className="nav-link"   placeholder="Search" aria-label="Search"/>
          </a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar
