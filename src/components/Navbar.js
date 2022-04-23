import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <ul className='navbar'>
      <li class="nav-item">
        <a href="#" class="nav-link d-flex flex-column">
            <i class="fab fa-bootstrap"></i>
            <span class="d-none d-sm-inline">home</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link d-flex flex-column">
            <i class="fab fa-bootstrap"></i>
            <span class="d-none d-sm-inline">home</span>
        </a>
      </li>
    </ul>

    // <ul className='navbar'>
    //     <li class="navbar-item"> <Link to="/">Home</Link> </li>
    //     <li class="navbar-item"> <Link to="/one">One</Link> </li>
    //     <li class="navbar-item"> <Link to="/two">Two</Link> </li>
    // </ul>
    // <ul>
        
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/one">One</Link></li>
    //     <li><Link to="/two">Two</Link></li>
    // </ul>
  )
}

export default Navbar