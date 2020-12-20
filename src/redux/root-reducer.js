import { combineReducers } from 'redux';

import cityReducer from './cities/cities-reducer';

export default combineReducers({
    cities: cityReducer
})