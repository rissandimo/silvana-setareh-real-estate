import React from 'react';
import './cities.css';
import City from '../City/City';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/cities/city-selector';

const Cities = ({ cities }) => {

    return(
    <div className="cities">

        <div className="cities">
            {cities.map(({ title, imageUrl, id}) => (
                <City key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cities: selectDirectorySection
})

export default connect(mapStateToProps)(Cities);