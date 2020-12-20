import React from 'react';
import './cityProperties.css';

// import { selectSoldProperties } from '../../redux/properties/properties-selector';

import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import PropertyViewer from '../property-viewer/PropertyViewer';

const CityProperties = ({ soldProperties }) => {
    console.log('sold properties', soldProperties);
    return(
    <div className="city__propertites">
        <h2>Sold Properties</h2>
        {
        soldProperties.map(({id, ...otherProductProps}) => {
            return <PropertyViewer key={id} {...otherProductProps} />
        })
        }
    </div>
    )
}

const mapStateToProps = state => ({
    soldProperties: state.properties.soldProperties
})

export default connect(mapStateToProps)(CityProperties);