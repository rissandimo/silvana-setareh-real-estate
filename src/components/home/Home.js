import React from 'react';
import './Home.css';

// Components
import About from '../about/About'
import Contact from '../contact/Contact'
import Slideshow from '../slideshow/Slideshow'

const Home = () => (
    <div className="home">
        <div className="topSection">
            <About />
            <Contact />
        </div>
        <div className="middleSection">
            <Slideshow />
        </div>
    </div>
)

export default Home;