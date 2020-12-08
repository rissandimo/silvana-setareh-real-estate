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

            <div className="contact__info">
                <div className="contact__social-media">
                    <p>Follow Soraya Setareh </p>
                    <div className="social__media-links">
                    <span className="link">
                        <FacebookIcon />
                    </span>
                    <span className="link">
                        <InstagramIcon />
                    </span>
                    <span className="link">
                        <TwitterIcon />
                    </span>
                    </div>
                </div>

                <div className="contact__address">
                    <h4 className="city">BEVERLY HILLS</h4>
                    <div className="location">
                        <span>123 N PALM DR</span>
                        <span>BEVERLY HILLS, CA 90212</span>
                        <span>(310) 625-2123</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
        )
}

export default Contact;