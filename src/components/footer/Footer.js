import React from 'react';
import './Footer.css';

import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';

const Footer = () => {
    return (
        <div className="footer">
        <h1>Silvana Saidian</h1>

        <div className="footer__address">

        <div className="footer__section">
            <div className="section__image">
                <BusinessIcon fontSize='large' className='footer__font' />
            </div>
            <div className="section__details">
            <span>Silvana Saidian</span>
                    <span>123 N. Palm Dr</span>
                    <span>Beverly Hills, CA 90210</span>
                    <span>DRE# 123456</span>
            </div>
        </div>

            <div className="footer__section">
                <div className="section__image">
                    <BusinessIcon fontSize='large' className='footer__font'/>
                </div>
                <div className="section__details">
                    <span>Silvana Saidian</span>
                    <span>123 N. Palm Dr</span>
                    <span>Beverly Hills, CA 90210</span>
                    <span>DRE# 123456</span>
                </div>
            </div>

            <div className="footer__section">
                <div className="section__image">
                    <PhoneIcon fontSize='large' className='footer__font'/>
                </div>
                <div className="section__details">
                    <span>TELEPHONE</span>
                    <span>(310) 666-4744</span>
                </div>
            </div>
        </div>



        </div>
    )
}

export default Footer;