import React from 'react';
import './Sold.css'

import { Route } from 'react-router-dom';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';

import Cities from '../cities/cities';
import CityProperties from '../city-properties/city-properties';

const Sold = () => (
    <div className="sold">
        <Cities />
        <CityProperties />
    </div>
)

export default Sold;