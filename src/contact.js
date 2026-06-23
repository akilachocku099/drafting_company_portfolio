import './App.css';
import React, { useState } from 'react';

function Contact() {
const [isSubmitted, setIsSubmitted] = useState(false);
const handleSubmit = (e) => {
    e.preventDefault(); 
  alert("Thanks for submitting! We will get back to you soon.");
    setIsSubmitted(true);
    e.target.reset();
}
  return (
    <section className="contact-section" id="contact">
        <div className="contact-content">
        <div className="contact-get-quote-container">
          <p className="contact-get-quote">Get Your Quote Today!</p>
          <p className="contact-phone">
            <a href="tel:+61449191441" style={{ color: 'inherit', textDecoration: 'none' }}>
              0449 191 441
            </a>
          </p>
        </div> 
      </div>
      <div className="contact-background-1">
        <div className="contact-header-container">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="contact-form-container">
          {/* ACTION SET TO SECURE MAIL GATEWAY */}
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
            
            {/* 1. THE BRIDGE CONFIG (Paste your generated secret key token inside value) */}
            <input type="hidden" name="access_key" value="bca731aa-69ac-41b5-8d9c-d851abb8f9df" />
            
            {/* Optional spam filter configuration rule */}
            <input type="hidden" name="from_name" value="Laxman Portfolio" />

            {/* 2. IDENTIFYING NAME ATTRIBUTES ADDED */}
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>


      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href="mailto:laxmandrafters@gmail.com">laxmandrafters@gmail.com</a> | 
          <strong> Phone:</strong> <a href="tel:+61449191441">+61 449 191 441</a> | 
          <strong> Location:</strong> Perth, Australia
        </p>
        <p>© 2026 Laxman Drafters. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Contact;