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
    <p className="telephone">Fax: (310) 471-2602</p>

    <div className="address">
        <p>Mon - Friday, 9 am - 6 pm</p>
        <p>
        9197 Wilshire Blvd. Suite 321 <br />
        Bevely Hills, CA 90210
        </p>
    </div>

    <div className="agency">
        <p>REALTY REALTORS</p>
        <p>Beverly Hills Real Estate Agent</p>
        <p>DRE #2134567</p>
    </div>

    <div className="social">
        <a href="#" className="link">
            <FacebookIcon className="icon" />
        </a>
        <a href="#" className="link">
            <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/soraya-setareh-3a781625/" target="_blank" className="link">
            <TwitterIcon />
        </a>
    </div>

</div>
)

export default ContactDetails