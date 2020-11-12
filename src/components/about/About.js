import React from 'react';
import './About.css';

import profilePic from '../../assets/silvana.jpg';

const About = () => (
    <div className="about">
        <img src={profilePic} alt=""/>
        <div className="about__info">
                <h1>Silvana Setareh</h1>
            <p>DRE# 123456</p>
            <div className="about__location">
                <div className="about__address">
                <span><strong>Address:</strong> 202 N. Canon Dr. Beverly Hills, CA</span>
                 <button className='button'>View My Profile</button>
                </div>
                 <p><strong>Cell</strong> (310) 666-4744</p>
                 <p>
                 <strong>Email: </strong>
                 <a href = "mailto: silvana.setareh@gmail.com">silvana.setareh@gmail.com</a>
                </p>
            </div>
        </div>
    </div>
)

export default About;