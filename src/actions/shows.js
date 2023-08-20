export const getShows = () => {
  fetch("/shows")
  .then(r => r.json())
  .then(shows => {debugger})
}
