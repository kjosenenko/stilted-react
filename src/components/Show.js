import React from 'react'
import PresaleLink from './PresaleLink'
import dayjs from 'dayjs'

function Show(show) {
  const presaleLink = PresaleLink(show.has_presale, show.presale_link)
  const showDateTime = dayjs(show.show_date_time).format('MM/DD/YYYY hh:mm A')

  return (
    <div className="card" key={show.id}>
      <div className="row">
        <div className="col-md-12">
          <div className="card-body">
            <h3>{show.venue}</h3>
            <h5>{showDateTime}</h5>
            {presaleLink}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
