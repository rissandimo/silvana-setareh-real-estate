import React from 'react';
import './Properties.css';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';
import houseImage3 from '../../assets/houses/house-3.jpg';

const Properties = () => (
    <div className="properties">
        <h1>Sold Properities</h1>

        <div className="properties__group">

            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span>Address</span>
                    <span>Price</span>
                </div>
            </div>
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span>Address</span>
                    <span>Price</span>
                </div>
            </div>
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span>Address</span>
                    <span>Price</span>
                </div>
            </div>


        </div>


    </div>
)

export default Properties;