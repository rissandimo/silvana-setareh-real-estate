import React from 'react';
import './contactDetails.css';

// Material UI
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


const ContactDetails = () => (
    <div className="contact__details">
    <h5>CONTACT DETAILS</h5>
    <p className="telephone">Tel: (310) 625-2123</p>

    <div className="address">
        <p>Mon - Friday, 9 am - 6 pm</p>
        <p>123 N Palm Dr. Suite 123</p>
        <p>Bevely Hills, CA 90210</p>
    </div>

    <div className="agency">
        <p>REALTY REALTORS</p>
        <p>Beverly Hills Real Estate Agent</p>
        <p>DRE #2134567</p>
    </div>

    <div className="social">
        <a href="#" className="link">
            <FacebookIcon />
        </a>
    </div>

</div>
)

export default ContactDetails