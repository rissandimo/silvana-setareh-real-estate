import React from 'react';
import './Sold.css'

import { Route } from 'react-router-dom';

import Cities from '../cities/cities';
import CityProperties from '../city-properties/city-properties';

const Sold = ({ match }) => (
    <div className="sold">
        <Route exact path={`${match.path}`} component={Cities} />
        <Route path={`${match.path}/:cityId`} component={CityProperties} />
    </div>
)

export default Sold;