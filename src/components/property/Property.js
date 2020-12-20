import React from 'react';

const Property = ({ property }) => {

    const { address, price, type } = property;
    return (
        <div className="previewItem">
            <h3 className="previewItem__name">{address}</h3>
        <div className="previewItem_description">
            <h4>${price}</h4>
            <p>{type}</p>
        </div>
        </div>
    )
}

export default Property;