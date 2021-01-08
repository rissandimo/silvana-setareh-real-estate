import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './city.css';

import { selectPropertiesBasedOnCity } from '../../redux/properties/properties-selector';

    const City = ({ title, imageUrl, linkUrl, soldProperties}) => {
        console.log('sold properties', soldProperties);
        return(     
    <div className="city">
    <div className="city-info">
        <h4>{title}</h4>
    </div>
    <p>Sold Properties {soldProperties.properties.length}</p>
    <Link to={linkUrl} className="city__link">
        <img src={imageUrl} alt=""/>
    </Link>
    </div>
    )}

    // function mapStateToProps(state, ownProps) {
    //     const { title } = ownProps
    //     propertiesByCity: getPropertiesByCity(title, state)
    //   }

      
    const mapStateToProps = (state, ownProps) => ({
        soldProperties: selectPropertiesBasedOnCity('Beverly Hills')(state)
    })

export default connect(mapStateToProps)(City);