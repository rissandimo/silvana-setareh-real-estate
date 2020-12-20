import React from 'react';
import './cityProperties.css';

import { connect } from 'react-redux';

import { selectCity } from '../../redux/properties/properties-selector';

const CityProperties = ({ match, soldProperties }) => {
    console.log(match);
    console.log('sold properties', soldProperties);
    return(
    <div className="city__propertites">
        <h2>Sold Properties</h2>
        {/* {
        soldProperties.map(({id, ...otherProductProps}) => {
            return <PropertyViewer key={id} {...otherProductProps} />
        })
        } */}
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    soldProperties: selectCity(ownProps.match.params.cityId)(state)
})

export default connect(mapStateToProps)(CityProperties);