import React from 'react';

import Property from '../property/Property';

const PropertyViewer = ({title, items}) => {
    return (
        <div className="productPreview">
            <h2 className='productPreview__title'>{title}</h2>
            <div className="preview">
                {items.map(item => (
                    <Property key={item.id} item={item} alt="product"/>
                ))}
            </div>
        </div>
    )
}

export default PropertyViewer;