import React from 'react';
import './Properties.css';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';
import houseImage3 from '../../assets/houses/house-3.jpg';

const Properties = () => (
    <div className="properties">
        <h2>Featured Listings</h2>

        <div className="properties__group">
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $1,000,000</span>
                    <h4 className="property__details-address">123 N PALM DR</h4>
                    <span className="property__details-city">BEVERLY HILLS, CA</span>
                </div>
            </div>
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $1,500,000</span>
                    <h4 className="property__details-address">222 N ROBERTSON BLVD</h4>
                    <span className="property__details-city">BEVERLY HILLS, CA</span>
                </div>
            </div>
        </div>

        <div className="properties__group">
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $5,000,000</span>
                    <h4 className="property__details-address">123 N OAKHURST DR</h4>
                    <span className="property__details-city">BEVERLY HILLS, CA</span>
                </div>
            </div>
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $8,500,000</span>
                    <h4 className="property__details-address">555 N GALE DR</h4>
                    <span className="property__details-city">LOS ANGELES, CA</span>
                </div>
            </div>
        </div>

        <div className="properties__group">
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $1,000,000</span>
                    <h4 className="property__details-address">123 N PALM DR</h4>
                    <span className="property__details-city">BEVERLY HILLS, CA</span>
                </div>
            </div>
            <div className="property">
                <img src={houseImage} className="property__image"/>
                <div className="property__details">
                    <span className="property__details-price">OFFERED AT $1,500,000</span>
                    <h4 className="property__details-address">222 N ROBERTSON BLVD</h4>
                    <span className="property__details-city">BEVERLY HILLS, CA</span>
                </div>
            </div>
        </div>


    </div>
)

export default Properties;