import React from 'react';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';

const Sold = () => (
    <div className="sold">
        <div className="sold__group">

            <div className="property">
                <img src={houseImage} alt=""/>
                <div className="property__details">
                    <p>Property Name</p>
                    <p>Property Address</p>
                    <p>Property Price</p>
                </div>
            </div>

            <div className="property">
                <img src={houseImage2} alt=""/>
                <div className="property__details">
                    <p>Property Name</p>
                    <p>Property Address</p>
                    <p>Property Price</p>
                </div>
            </div>

        </div>
    </div>
)

export default Sold;