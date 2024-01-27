import React from 'react'
import Show from './Show'

function ShowsList({shows, current}) {
  const list = shows.map((show) => Show({show: show, current: current}))

  return(list)
}

export default ShowsList
