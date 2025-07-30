import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 0', textAlign: 'center' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-content">
          <p>Email: hello@marketingpro.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
