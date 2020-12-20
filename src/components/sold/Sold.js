import React from 'react';
import './Sold.css'

import { Route } from 'react-router-dom';

import houseImage from '../../assets/houses/house-1.jpg';
import houseImage2 from '../../assets/houses/house-2.jpg';

import Cities from '../cities/cities';

const Sold = () => (
    <div className="sold">
        <Cities />
    </div>
)

export default Sold;