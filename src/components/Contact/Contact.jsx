
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-form">
        <div>
          <h3>Get in touch</h3>
          <p>I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
          <div>
            <img src={"assets/Email.svg"}/>
            1-514-456-2753
          </div>
          <div>
            <img src={"assets/Email.svg"}/>
            Sou12@gmail.com
          </div>
        </div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <img src="../../assets/girl.png" alt="girl" className="girl-img" />
    </section>
  );
};

export default Contact;