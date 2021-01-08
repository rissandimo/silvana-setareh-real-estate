import React from 'react';
import './cities.css';
import City from '../City/City';

import { connect } from 'react-redux';

const Cities = ({ cities }) => (
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
)

const mapStateToProps = state => ({
    cities: state.cities.sold
})

export default connect(mapStateToProps)(Cities);