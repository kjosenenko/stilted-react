import React from 'react'
import { useState } from 'react';
import {connect} from 'react-redux'

function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const submitForm = (data) => {
    fetch("https://api.stiltedband.com/contact/", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({data})
    })
    .then(r => {
      if (r.status == 201) {
        window.location.href = '/submitted';
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(inputs)
  }

  return (
    <div className="black">
      <h1 className="center-text">CONTACT US</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row my-2">
            <div className="col-md-6">
              <label htmlFor="contact_name">Name</label>
              <input type="text" name="contact_name" id="contact_name" value={inputs.contact_name || ''} onChange={handleChange}/>
            </div>
          <div className="col-md-6">
            <label htmlFor="contact_email">Email</label>
            <input type="text" name="contact_email" id="contact_email" value={inputs.contact_email || ''} onChange={handleChange}/>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-6">
            <label htmlFor="message_subject">Subject</label>
            <input type="text" name="message_subject" id="message_subject" value={inputs.message_subject || ''} onChange={handleChange}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="contact_phone">Phone</label>
            <input type="text" name="contact_phone" id="contact_phone" value={inputs.contact_phone || ''} onChange={handleChange}/>
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="message_body">message</label>
          <textarea name="message_body" id="message_body"  value={inputs.message_body || ''} onChange={handleChange}></textarea>
        </div>
          <div className="col-md-1">
          <input type="submit" name="commit" value="Send" className="btn btn-dark" data-disable-with="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
