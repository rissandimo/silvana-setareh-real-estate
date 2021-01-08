import React from 'react';
import './cities.css';
import City from '../City/City';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectSoldPropertyCities } from '../../redux/cities/city-selector';
import { selectSoldProperties } from '../../redux/properties/properties-selector';

const Cities = ({ cities, properties }) => {
    return(
    <div className="cities">

        <div className="cities">
            {cities.map(({ title, imageUrl, id, linkUrl }) => (
                <City key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} properties={properties} />
            ))}
        </div>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cities: selectSoldPropertyCities,
    properties: selectSoldProperties
})

export default connect(mapStateToProps)(Cities);