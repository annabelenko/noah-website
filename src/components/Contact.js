import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to take your marketing to the next level? Let's discuss your project and goals.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Start a Conversation</h3>
            <p>
              I'm always excited to work on new projects and help businesses 
              achieve their marketing objectives. Whether you need a complete 
              strategy overhaul or specific campaign support, I'm here to help.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> hello@marketingpro.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Location:</strong> New York, NY</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
