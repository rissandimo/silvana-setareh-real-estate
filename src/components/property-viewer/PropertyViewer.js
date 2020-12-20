import React from 'react';
import './propertyViewer.css';

import Property from '../property/Property';

const PropertyViewer = ({title, properties}) => {
    return (
        <div className="productPreview">
            <h2 className='productPreview__title'>{title}</h2>
            <div className="preview">
                {properties.map(property => (
                    <Property key={property.id} property={property} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default PropertyViewer;