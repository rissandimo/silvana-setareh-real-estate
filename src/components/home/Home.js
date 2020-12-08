import React from 'react';
import './Home.css';

// Components
import Hero from '../hero/Hero';
import ContactForm from '../contact/ContactForm'
import Slideshow from '../slideshow/Slideshow'

const Home = () => (
    <div className="home">
        <div className="topSection">
            <Hero />
        </div>
        <div className="middleSection">
            <Slideshow />
        </div>
    </div>
)

export default Home;