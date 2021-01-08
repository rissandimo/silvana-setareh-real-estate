import React from 'react';
import './cities.css';
import City from '../City/City';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectSoldPropertyCities } from '../../redux/cities/city-selector';
// import { selectSoldProperties } from '../../redux/properties/properties-selector';

const Cities = ({ cities, soldProperties }) => {
    // console.log('sold properties ', soldProperties);
    // console.log('beverly hills', soldProperties[0].properties.length);
    // const property = soldProperties.filter(property => property.title === 'Beverly Hills');

    return(
    <div className="cities">

        <div className="cities">
            {cities.map(({ title, imageUrl, id, linkUrl }) => (
                <City 
                    id={id}
                    key={id} 
                    title={title} 
                    imageUrl={imageUrl} 
                    linkUrl={linkUrl}
                    
                    />
            ))}
        </div>
    </div>
    )
}

// numberOfPropertiesSold = {soldProperties.forEach(property => {})
//                         .find(property => property.title === title).length}

// const mapStateToProps = createStructuredSelector({
//     cities: selectSoldPropertyCities
// })

const mapStateToProps = state => ({
    cities: state.cities.sold,
    // soldProperties: selectPropertiesBasedOnCity('Beverly Hills')(state)
    soldProperties: state.properties.soldProperties
})

// export const selectPropertiesBasedOnCity = cityTitle => createSelector(
//     [selectSoldProperties],
//     properties => properties.find(property => property.id === CITY_TITLE_MAP[cityTitle])
// )

export default connect(mapStateToProps)(Cities);