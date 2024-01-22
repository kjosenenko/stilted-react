import React, {useEffect} from 'react'
import { useState } from "react";
import ShowsList from './ShowsList'

function Shows() {
  const [shows, setShows] = useState({});
  const [past_shows, setPastShows] = useState({});
  // debugger

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

  if (shows.shows) {
  return (
    ShowsList(shows.shows)
  )
  }  
}

export default Shows
