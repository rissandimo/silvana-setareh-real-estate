import React from 'react';
import './Sold.css'

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';

const Sold = () => (
    <div className="sold">

        <div className="sold__group">
            <img src={houseImage} alt="house"/>
            <div className="sold__details">
                <div className="address">
                    <h3 className="address__street">111 N Palm Dr</h3>
                    <span className="address__city">Beverly Hills, CA</span>
                </div>
                <div className="house__info">
                    <span className="price">
                        $2,000,0000
                    </span>
                    <span className="rooms">
                        3 Beds | 4 baths
                    </span>
                </div>
            </div>
        </div>

        <div className="sold__group">
            <img src={houseImage} alt="house"/>
            <div className="sold__details">
                <div className="address">
                    <h3 className="address__street">111 N Palm Dr</h3>
                    <span className="address__city">Beverly Hills, CA</span>
                </div>
                <div className="house__info">
                    <span className="price">
                        $2,000,0000
                    </span>
                    <span className="rooms">
                        3 Beds | 4 baths
                    </span>
                </div>
            </div>
        </div>

        <div className="sold__group">
            <img src={houseImage} alt="house"/>
            <div className="sold__details">
                <div className="address">
                    <h3 className="address__street">111 N Palm Dr</h3>
                    <span className="address__city">Beverly Hills, CA</span>
                </div>
                <div className="house__info">
                    <span className="price">
                        $2,000,0000
                    </span>
                    <span className="rooms">
                        3 Beds | 4 baths
                    </span>
                </div>
            </div>
        </div>

        <div className="sold__group">
            <img src={houseImage} alt="house"/>
            <div className="sold__details">
                <div className="address">
                    <h3 className="address__street">111 N Palm Dr</h3>
                    <span className="address__city">Beverly Hills, CA</span>
                </div>
                <div className="house__info">
                    <span className="price">
                        $2,000,0000
                    </span>
                    <span className="rooms">
                        3 Beds | 4 baths
                    </span>
                </div>
            </div>
        </div>


    </div>
)

export default Sold;