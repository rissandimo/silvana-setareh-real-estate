import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css'

import { Slide } from 'react-slideshow-image';

import houseImage from '../../assets/houses/house-1.jpg';

const slideImages = [
    '../../assets/houses/house-1.jpg',
    '../../assets/houses/house-2.jpg',
    '../../assets/houses/house-3.jpg',
    '../../assets/houses/house-4.jpg',
    '../../assets/houses/house-5.jpg',
    '../../assets/houses/house-6.jpg'
]

const Slideshow = () => {
    return (
        <div className='slideshow'>
        <Slide easing="ease">
          <div className="each-slide">
            <img src={houseImage} alt=""/>
            <p>Some address</p>
            <p>$123.00</p>
            <div className="propertyDetails">
                <div className="detailsLeft">
                    <span># of beds</span>
                    <span># of restrooms</span>
                    <span>squar feet</span>
                </div>
                <div className="detailsRight">
                    <span>Residential</span>
                    <span>MLS #</span>
                </div>
            </div>
            <div className="propertyDetails-more">
                <a href="">Request Info</a>
                <a href="">Details > </a>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;