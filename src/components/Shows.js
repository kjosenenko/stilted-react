import React, {useEffect} from 'react'
import { useState } from "react";
import ShowsList from './ShowsList'

function Shows() {
  const [shows, setShows] = useState({});
  const [past_shows, setPastShows] = useState({});
  const showsHeader = <h1 className="center-text monoton">SHOWS AND DATES</h1>
  const pastHeader = <h1 className="center-text monoton">PAST SHOWS</h1>
  const noShows = 
    <div className="card">
      <div className="card-body">
        <h5 className="center-text">No new shows at this time. Please check back later.</h5>
      </div>
    </div>

  useEffect(() => {
    fetch("/shows")
    .then(r => r.json())
    .then(shows => setShows({shows: shows}))
  }, []);

  useEffect(() => {
    fetch("/past_shows")
    .then(r => r.json())
    .then(past_shows => setPastShows({past_shows: past_shows}))
  }, []);

  if (shows.shows && past_shows.past_shows) {
    if (shows.shows.length) {
      return (
        <div>
          {showsHeader}
          {ShowsList({shows: shows.shows, current: true})}
          {pastHeader}
          {ShowsList({shows: past_shows.past_shows, current: false})}
        </div>
      )
    } else {
      return (
        <div>
          {showsHeader}
          {noShows}
          {pastHeader}
          {ShowsList({shows: past_shows.past_shows, current: false})}
        </div>
      )
    }    
  } else {
    return (
      <div>
        {showsHeader}
        {noShows}
      </div>
    )
  }
}

export default Shows
