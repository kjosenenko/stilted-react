import React from 'react'
import PresaleLink from './PresaleLink'

function Show(show) {
  const presaleLink = PresaleLink(show.has_presale, show.presale_link)
  return (
    <div className="card" key={show.id}>
      <div className="row">
        <div className="col-md-12">
          <div className="card-body">
            <h3>{show.venue}</h3>
            <h5>With {show.supporting_acts}</h5>
            <h5>{show.show_date} {show.show_time}</h5>
            {presaleLink}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
