import { combineReducers } from 'redux';

import cityReducer from './cities/city-reducer';
import propertiesReducer from './properties/property-reducer';

export default combineReducers({
    cities: cityReducer,
    properties: propertiesReducer
})