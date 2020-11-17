import React from 'react';
import './Home.css';

// Components
import About from '../about/About'
import ContactForm from '../contact/ContactForm'
import Slideshow from '../slideshow/Slideshow'

const Home = () => (
    <div className="home">
        <div className="topSection">
            <About />
            <ContactForm />
        </div>
        <div className="middleSection">
            <Slideshow />
        </div>
    </div>
)

export default Home;