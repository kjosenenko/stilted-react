import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`The name you entered was: ${contactName}`)
    console.log(`The email you entered was: ${contactEmail}`)
    console.log(`The phone you entered was: ${contactPhone}`)
    console.log(`The subject you entered was: ${messageSubject}`)
    console.log(`The message you entered was: ${messageBody}`)
  }

  return (
    <div class="black">
      <h1 class="center-text">CONTACT US</h1>
      <div class="container">
        <form onSubmit={handleSubmit}>
          <div class="row my-2">
            <div class="col-md-6">
              <label htmlFor="contact_name">Name</label>
              <input type="text" name="contact_name" id="contact_name" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
            </div>
          <div class="col-md-6">
            <label htmlFor="contact_email">Email</label>
            <input type="text" name="contact_email" id="contact_email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-md-6">
            <label htmlFor="message_subject">Subject</label>
            <input type="text" name="message_subject" id="message_subject" value={messageSubject} onChange={(e) => setMessageSubject(e.target.value)}/>
          </div>
          <div class="col-md-6">
            <label htmlFor="contact_phone">Phone</label>
            <input type="text" name="contact_phone" id="contact_phone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)}/>
          </div>
        </div>
        <div class="my-2">
          <label htmlFor="message_body">message</label>
          <textarea name="message_body" id="message_body"  value={messageBody} onChange={(e) => setMessageBody(e.target.value)}></textarea>
        </div>
          <div class="col-md-1">
          <input type="submit" name="commit" value="Send" class="btn btn-dark" data-disable-with="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact