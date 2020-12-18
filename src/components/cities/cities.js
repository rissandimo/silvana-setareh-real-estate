import React from 'react';
import './cities.css';

import beverlyHills from '../../assets/cities/bh.jpg';
import encino from '../../assets/cities/encino.JPG';
import losAngeles from '../../assets/cities/la.jpg';
import westHollywood from '../../assets/cities/wh.jpg';

const Cities = ({ match }) => {
    console.log(match);
    return(
    <div className="cities">

        <div className="cities">
            <div className="city">
                <div className="city-info">
                    <h4>Beverly Hills</h4>
                </div>
                <img src={beverlyHills} alt=""/>
            </div>

            <div className="city">
                <div className="city-info">
                    <h4>Encino</h4>
                </div>
                <img src={encino} alt=""/>
            </div>

            <div className="city">
                <div className="city-info">
                    <h4>Los Angeles</h4>
                </div>
                <img src={losAngeles} alt=""/>
            </div>
            <div className="city">
                <div className="city-info">
                    <h4>West Hollywood</h4>
                </div>
                <img src={westHollywood} alt=""/>
            </div>
        </div>
    </div>
    )
}

export default Cities;