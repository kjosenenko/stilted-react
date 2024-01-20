import React, {useEffect} from 'react'
import { useState } from "react";
import ShowsList from './ShowsList'

function Shows() {
  const [shows, setShows] = useState({});
  // debugger

  useEffect(() => {
    fetch("/shows")
    .then(r => r.json())
    .then(shows => setShows({shows: shows}))
  }, []);

  if (shows.shows) {
    return (
      ShowsList(shows.shows)
    )
  } else {
    return (
      <div>
        <h1 className="center-text monoton">SHOWS AND DATES</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="center-text">No new shows at this time. Please check back later.</h5>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Shows
