import React from 'react';
import './cityProperties.css';

const CityProperties = ({match }) => {
    console.log(match);
    return(
    <div className="city__propertites">
        <h2>Houses Sold in Beverly Hills</h2>
    </div>
    )
}

export default CityProperties;