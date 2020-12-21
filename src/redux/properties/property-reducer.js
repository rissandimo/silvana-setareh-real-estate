import SOLD_PROPERTIES_DATA from './sold-properties-data';

const INITIAL_STATE = {
    soldProperties: SOLD_PROPERTIES_DATA
}

const propertiesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default propertiesReducer;