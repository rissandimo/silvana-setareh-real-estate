import React from 'react';
import './Footer.css';

import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Footer = () => {
    return (
        <div className="footer">
        {/* <h1>Soraya Setareh</h1> */}

        <div className="footer__address">

        <div className="footer__section">
            <div className="section__image">
                <BusinessIcon fontSize='large' className='footer__font' />
            </div>
            <div className="section__details">
                <span>SORAYA SETAREH</span>
                <span>9197 Wilshire Blvd. Suite 321 <br/>
                    Bevely Hills, CA 90210</span> 
                <span>DRE# 2134567</span>
            </div>
        </div>

        <div className="footer__section">
            <div className="section__image">
                <PhoneIcon fontSize='large' className='footer__font'/>
            </div>
            <div className="section__details">
                <span>TELEPHONE</span>
                <span>(310) 625-2123</span>
            </div>
        </div>

        <div className="footer__section">
            <div className="section__image">
                <ScheduleIcon fontSize='large' className='footer__font'/>
            </div>
            <div className="section__details">
                <span>HOURS</span>
                <span>MON - FRI</span>
                <span>10:00AM - 8:30PM</span>
            </div>
        </div>
        </div>



        </div>
    )
}

export default Footer;