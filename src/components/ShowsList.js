import React from 'react'
import Show from './Show'

function ShowsList(shows) {
  const list = shows.map((show) => Show(show))

  return(list)
}

export default ShowsList
