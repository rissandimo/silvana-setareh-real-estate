import React from 'react';
import { Link } from 'react-router-dom';
import './city.css';

import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { getNumberOfPropertiesSold } from '../../redux/properties/properties-selector';

    const City = ({ title, imageUrl, linkUrl}) => {
        // console.log('properties: ', properties);
        return(     
    <div className="city">
    <div className="city-info">
        <h4>{title}</h4>
    </div>
    <div className="houses__sold">
        <p>
            Properties Sold: 
        </p>
    </div>
    <Link to={linkUrl} className="city__link">
        <img src={imageUrl} alt=""/>
    </Link>
    </div>
    )}

export default City;