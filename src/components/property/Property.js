import React from 'react';
import './property.css';

const Property = ({ property }) => {

    const { address, price, bedrooms, bathrooms, image, sqft, type, mls } = property;
    return (
        <div className="property">

            <img src={image} className="img" alt=""/>
            <h3 className="address">{ address }</h3> 
            <h4 className="price">${price}</h4>

        <div className="property__description">
            <div className="row">
                <p>{bedrooms} <span className="left">Bedrooms</span> </p>
                <p>{type}</p>
            </div>
            <div className="row">
                <p>{bathrooms} <span className="left">Bathrooms</span> </p>
                <p>MLS# {mls}</p>
            </div>
            <div className="row">
                <p>{sqft} <span className="left">Sqft</span> </p>
                <p>sold</p>
            </div>
        </div>
        </div>
    )
}

export default Property;