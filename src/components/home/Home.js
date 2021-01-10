import React from 'react';
import './Home.css';

// Components
import Hero from '../hero/Hero';
import About from '../../pages/about/AboutPage';

const Home = () => (
    <div className="home">
        <Hero />
        <div className="topSection">
        </div>
         <About />
    </div>
)

export default Home;