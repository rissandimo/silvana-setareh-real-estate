import React from 'react';
import './Sold.css'

import { Route } from 'react-router-dom';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';

import Cities from '../cities/cities';

import CityProperties from '../city-properties/city-properties';

const Sold = ({ match }) => {
    console.log(match);
    return(
        <div className="sold">

        <Route exact path={`${match.path}`} component={Cities} />
        <Route path={`${match.path}/:cityId`} component={CityProperties} />

       

        {/* <div className="sold__group">
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
        </div> */}


    </div>
)}

export default Sold;