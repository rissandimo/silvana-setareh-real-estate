import React from 'react';

const City = ({ title, imageUrl }) => (

<div className="city">
    <div className="city-info">
        <h4>{title}</h4>
    </div>
    <img src={imageUrl} alt=""/>
</div>
)

export default City;