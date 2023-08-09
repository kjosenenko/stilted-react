import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div class="black">
      <h1 class="center-text">CONTACT US</h1>
      <div class="container">
        <form>
          <div class="row my-2">
            <div class="col-md-6">
              <label for="message_contact_name">Name</label>
              <input type="text" name="message[contact_name]" id="message_contact_name" />
            </div>
          <div class="col-md-6">
            <label for="message_contact_email">Email</label>
            <input type="text" name="message[contact_email]" id="message_contact_email" />
          </div>
        </div>
        <div class="row my-2">
          <div class="col-md-6">
            <label for="message_message_subject">Subject</label>
            <input type="text" name="message[message_subject]" id="message_message_subject" />
          </div>
          <div class="col-md-6">
            <label for="message_contact_phone">Phone</label>
            <input type="text" name="message[contact_phone]" id="message_contact_phone" />
          </div>
        </div>
        <div class="my-2">
          <label for="message_message_body">message</label>
          <textarea name="message[message_body]" id="message_message_body"></textarea>
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