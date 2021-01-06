import React from 'react';
import { Link } from 'react-router-dom';
import './city.css';

const City = ({ title, imageUrl, linkUrl }) => (

<div className="city">
    <div className="city-info">
        <h4>{title}</h4>
    </div>
    <div className="houses__sold">
        <p>
            8
        </p>
    </div>
    <Link to={linkUrl} className="city__link">
        <img src={imageUrl} alt=""/>
    </Link>
</div>
)

export default City;