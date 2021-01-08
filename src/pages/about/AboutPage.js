import React from 'react';
import './aboutPage.css';

import profilePic from '../../assets/soraya.jpg';

const AboutPage = () => (
    <div className="about">
        <img src={profilePic} alt=""/>
        <div className="about__info">
        <h4>Soraya Setareh | DRE# 2134567</h4>

        <p>
        Experienced Real Estate Agent serving Buyers and Sellers in New York and California for 30 years.  Focused on providing the best service to all types of clients, whether first-time buyers or seasoned investors.  Committed to offering honest advice for each unique purchase or sale in Los Angeles.
        </p>

        <p>
        Specialties: Expertise in areas of Beverly Hills, Beverlywood, Westwood and surrounding areas.
        </p>

        </div>

    </div>
)

export default AboutPage;