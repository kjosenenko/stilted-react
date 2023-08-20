import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div class="navbar navbar-expand-lg nav-background">
      <div class="container-fluid">
        <h1><a class="logo" href="/">STILTED</a></h1>
        <div class="d-none d-lg-block">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-link">
             <a class="btn btn-dark" href="/music">Listen Now</a>
            </li>
            <li class="nav-link">
              <a class="btn btn-dark" href="/shows">Upcoming Shows</a>
            </li>
            <li class="nav-link">
              <a class="btn btn-dark" href="contact">Booking / Contact</a>
            </li>
          </ul>
        </div>
        <div class="d-lg-none">
            <div class="btn-group">
            <a class="btn btn-dark" href="/shows">Shows</a>
            <a class="btn btn-dark" href="/music">Music</a>
            <a class="btn btn-dark" href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav