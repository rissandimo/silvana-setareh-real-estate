import React from 'react';
import './About.css';

import profilePic from '../../assets/silvana.jpg';

const About = () => (
    <div className="about">
        <img src={profilePic} alt=""/>
        <div className="about__info">
                <h2>Silvana Setareh</h2>
            <p>DRE# 123456</p>
            <div className="about__location">
                <span>202 N. Canon Dr. Beverly Hills, CA</span>
                 <button>View My Profile</button>
                 <p>Cell: 310 666 4744</p>
                 <p>Email: silvana.setareh@gmail.com</p>
            </div>
        </div>
    </div>
)

export default About;