import React from 'react'

function PresaleLink(has_presale, presale_link) {
  if (has_presale) {
    return (
      <a className='presale_link' href={presale_link}>More Info</a>
    )
  } else {
    return
  }
}

export default PresaleLink
