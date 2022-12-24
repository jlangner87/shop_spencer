import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './Form.css'

function Contact() {


  const initialState = {
    business_name: '',
    offering: '',
    category: '',
    email: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: 0 })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_sputs35',
        'template_x2tmj8c',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `Thank you for reaching out, ${formState.business_name}! Someone will respond shortly!`
          )
        },
        function (error) {
          alert('Sorry:', error)
        }
      )
    setFormState(initialState)
  }

  return (
    <div className="contact_card">
      <div className='contact_form'>
      <div id="contact-form">
      <h1>Did we miss one? Let us know!</h1>
      <form onSubmit={handleMessage} method="post" action="/">
      <div>
          <label for="name">
            <span class="required">Business Name:</span> 
            <input onChange={handleChange} type="text" id="business_name" name="business_name" value={formState.business_name} placeholder="Your Name" required="required" tabindex="1" />
          </label> 
      </div>
      <div>             
          <label for="subject">
          <span class="required">This is a business that offers:</span>
            <select onChange={handleChange} id="offering" name="offering" tabindex="4">  
              <option value="UNDEFINED!!!">Select One</option>     
              <option value="electronic gift cards">Electronic Gift Cards</option> 
              <option value="online ordering">Online Ordering</option>
              <option value="service booking">Service Booking</option>
              <option value="something else">Miltiple: Let us know in the message</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="subject">
          <span class="required">Business Category:</span>
            <select onChange={handleChange} id="category" name="category" tabindex="4">
              <option value="UNDEFINED!!!">Select One</option>    
              <option value="Food & Beverage">Food & Beverage</option> 
              <option value="Shops & Boutiques">Shops & Boutiques</option>
              <option value="Beauty & Wellness">Beauty & Wellness</option>
              <option value="Unlisted type">Other: Let us know in the message</option>
            </select>
          </label>
      </div>
      <div>
          <label for="email">
            <span class="required">Your Email Address:</span>
            <input onChange={handleChange} type="email" id="email" name="email" value={formState.email} placeholder="Your Email" tabindex="2" required="required" />
          </label>  
      </div>
      <div>             
          <label for="message">
            <span class="required">Message:</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>              
        <button onClick='handleMessage()' name="submit" type="submit" id="submit" >SEND</button> 
      </div>
      </form>
  </div> 
      </div>
    </div>
  )
}

export default Contact