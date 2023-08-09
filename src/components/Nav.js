import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg nav-background">
      <div class='container-fluid'>
        <h1><a href='/' class='logo'>STILTED</a></h1>
      </div>
      <div class='d-none d-lg-block'>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-link"><Link className="btn btn-dark" to="/music">Listen Now</Link></li>
          <li className="nav-link"><Link className="btn btn-dark" to="/shows">Upcoming Shows</Link></li>
          <li className="nav-link"><Link className="btn btn-dark" to="/contact">Booking / Contact</Link></li>
        </ul>
      </div>
      <div class='d-lg-none'>
        <div class='btn-group'>
          <li className="nav-link"><Link className="btn btn-dark" to="/">Shows</Link></li>
          <li className="nav-link"><Link className="btn btn-dark mx-2" to="/">Music</Link></li>
          <li className="nav-link"><Link className="btn btn-dark" to="/">Contact</Link></li>
        </div>
      </div>
    </nav>
  )
}

export default Nav