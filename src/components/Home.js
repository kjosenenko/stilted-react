import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div class='white center-text'>
      <img src="Stilted_Demisefest.jpg" class='image' />
      <br />
      <br />
      <div class='container'>
        <p class='black'>
          Stilted.  A three-piece rock and roll band from Fort Collins, Colorado.  Playing original music that runs the gauntlet from indie rock to (heavy) alternative, Stilted was once described as sounding like “the bastard love child of Nirvana and the Talking Heads”. Cody Hitchcock plays guitar and casts his male gaze towards your mom. Thom Miller plays bass and doesn’t give a shit about your social media. K.J. Osenenko plays drums and thinks your favorite band sucks. Despite these misanthropic personality quirks…or perhaps because of them, Stilted delivers a loud and rambunctious set of original music designed to knock your god-damned socks off.
        </p>
      </div>
      <div class='btn-group d-none d-lg-block'>
        <li className="nav-link"><Link className="btn btn-dark" to="/">Shows</Link></li>
        <li className="nav-link"><Link className="btn btn-dark mx-2" to="/">Music</Link></li>
        <li className="nav-link"><Link className="btn btn-dark" to="/">Contact</Link></li>
      </div>
      <br />
    </div>
  )
}

export default Home