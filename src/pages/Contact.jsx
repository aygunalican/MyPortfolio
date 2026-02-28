import React from 'react'
import '../assets/css/contact.css'
const Contact = () => {
  return (
    <section id='contact' className="contact">
  <div className="contact-con">
      <h2>Lets work together!</h2>
      <p>
     On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.
      </p>

      <form className="contact-form">
        <div className="wow">
          <div className="field ">
            <label>Your name *</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Your email *</label>
            <input type="email" />
          </div>
        </div>

        <div className="field subj">
          <label>Choose service</label>
          <input type="text" />
        </div>

        <div className="field mesg">
          <label>Your message</label>
          <textarea rows="5"></textarea>
        </div>

        <button type="button">Send Message</button>
      </form>
    </div>
</section>
  )
}

export default Contact