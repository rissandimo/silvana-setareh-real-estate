import React from 'react';
import './Contact.css';

// Components
import ContactForm from '../contact-form/ContactForm';
import ContactDetails from '../contact-details/ContactDetails';

const Contact = () => {
return (
    <div className="contact">
        <div className="contact__container">
            <ContactForm />
            <ContactDetails />
        </div>
    </div>
    )
}

export default Contact;