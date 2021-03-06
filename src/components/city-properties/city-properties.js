import React from 'react';
import './cityProperties.css';

import { connect } from 'react-redux';

import Property from '../property/Property';

import { selectCity } from '../../redux/properties/properties-selector';

const CityProperties = ({ soldProperties }) => {

    const { title, properties } = soldProperties;

    return(
    <div className="city__propertites">
        <h2 className="title">Sold Properties in {title}</h2>
        <div className="property__listings">
            {
            properties.map(property => (
                <Property key={property.id} property={property} />
            ))
            }
        </div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    soldProperties: selectCity(ownProps.match.params.cityId)(state)
})

export default connect(mapStateToProps)(CityProperties);