import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './city.css';

    const City = ({ id, title, imageUrl, linkUrl, soldProperties }) => (     
    <div className="city">
    <div className="city-info">
        <h4>{title}</h4>
    </div>
    <div className="houses__sold">
        <p>properties sold: {soldProperties[--id].properties.length}</p>
    </div>
    <Link to={linkUrl} className="city__link">
        <img src={imageUrl} alt=""/>
    </Link>
    </div>
)

const mapStateToProps = state => ({
        soldProperties: state.properties.soldProperties
    })
    
export default connect(mapStateToProps)(City);

