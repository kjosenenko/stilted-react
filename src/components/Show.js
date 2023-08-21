import React from 'react'

function Show(show) {
  return (
    <div className="card" key={show.id}>
      <div className="row">
        <div className="col-md-12">
          <div className="card-body">
            <h3>{show.venue}</h3>
            <h5>With {show.supporting_acts}</h5>
            <h5>{show.show_date} {show.show_time}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Show
