import React from 'react';
import './Contact.css';

// Components
import ContactForm from '../contact-form/ContactForm';
import ContactDetails from '../contact-details/ContactDetails';

const Contact = () => {
return (
    <div className="contact">
            <ContactForm />
            <ContactDetails />
    </div>
    )
}

export default Contact;