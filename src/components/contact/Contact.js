import React from 'react';
import './Contact.css';

// Components
import ContactForm from './ContactForm';

// Material UI
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const Contact = () => {


return (
    <div className="contact">
        <div className="contact__container">
            <div className="contact__form">
                <ContactForm />
            </div>
            <div className="contact__social-media">
                <p>Follow Silvana Saidian </p>
                <div className="social__media-links">
                <span className="link">
                    <FacebookIcon className='link' />
                </span>
                <span className="link">
                    <InstagramIcon className='link' />
                </span>
                <span className="link">
                    <TwitterIcon className='link' />
                </span>
                </div>
            </div>
        </div>
    </div>
        )
}

export default Contact;