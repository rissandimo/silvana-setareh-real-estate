import React from 'react';
import './Contact.css';

// Components
import ContactForm from '../contact-form/ContactForm';
import ContactDetails from '../contact-details/ContactDetails';

const Contact = () => {
return (
    <div className="contact">
        <div className="header">
            <h5 className="name">Soraya Setareh</h5>
            <h2 className="contact">Contact</h2>
        </div>
        <div className="body">
            <ContactForm />
            <ContactDetails />
        </div>
    </div>
    )
}

export default Contact;