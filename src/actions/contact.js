export const submitForm = (data) => {
  fetch("/contact", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data})
  })
  .then(r => {
    if (r.status == 201) {
      debugger
    }
  })
}