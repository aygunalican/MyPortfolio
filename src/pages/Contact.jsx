import React, { useRef } from 'react'
import '../assets/css/contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef();
  
  const sendEmail=(e)=>{
e.preventDefault();

emailjs .sendForm(
  "service_xzcvowz",
  "template_dy1o6l2",
  form.current,
 "lUvC68bDh2qD8mOCP"
) .then(()=>{alert("Successfully")},
(error)=>{console.log(error.text)}
  
 ); }
  return (
    <section id='contact' className="contact">
  <div className="contact-con">
      <h2>Lets work together!</h2>
<p>I’m always open to new ideas, projects, and collaborations. Get in touch!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="wow">
          <div className="field ">
            <label>Your name *</label>
            <input name="from_name" type="text" />
          </div>

          <div className="field">
            <label>Your email *</label>
            <input name="from_email" type="email" />
          </div>
        </div>

        <div className="field subj">
          <label>Choose service</label>
          <input name="from_service" type="text" />
        </div>

        <div className="field mesg">
          <label>Your message</label>
          <textarea name="message" rows="5"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
</section>
  )
}

export default Contact