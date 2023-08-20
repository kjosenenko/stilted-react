export const getShows = () => {
  return dispatch => {
      fetch("/shows")
      .then(r => r.json())
      .then(shows => dispatch({type:"SET_SHOWS", shows}))
  }
}