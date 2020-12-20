import { combineReducers } from 'redux';

import cityReducer from './cities/cities-reducer';
import propertiesReducer from './properties/property-reducer';

export default combineReducers({
    cities: cityReducer,
    properties: propertiesReducer
})