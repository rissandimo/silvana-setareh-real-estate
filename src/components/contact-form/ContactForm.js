import React, { useState } from 'react';
import './ContactForm.css';

import emailjs from 'emailjs-com';

// import FacebookIcon from '@material-ui/icons/Facebook';

const userId = 'user_8iRLrvvVA8jNsC3PJ0U6B';
const service_id = 'service_0um8hzd';
const templateId = 'template_2umnyoc';

const ContactForm = () => {
    
    const sendEmail = e => {
        e.preventDefault();

        
        emailjs.sendForm(service_id, templateId, e.target, userId)
        .then(() => {
            document.getElementById('form').reset();
        })
        .catch(error => console.log(error.text));

    }

    return (
        <div className="contact__form">
            <div className="form-wrap">
                <form className='form' id='form' onSubmit={sendEmail}> 
                <div className="form-group">
                    <input type="text" name="from_name" id="fullName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" name="client_email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="phone" name="phone" id="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;