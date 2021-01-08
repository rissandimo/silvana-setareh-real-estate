import { createSelector } from 'reselect';

const CITY_ID_MAP = {
    beverlyHills: 1,
    losAngeles: 2,
    westHollywood: 3
}

const CITY_TITLE_MAP = {
    'Beverly Hills': 1,
    'Los Angeles': 2,
    'West Hollywood': 3,
    'Encino': 4
}

const selectProperties = state => state.properties;

export const selectSoldProperties = createSelector(
    [selectProperties],
    properties => properties.soldProperties
)

// Select properties based on city - city title
export const selectPropertiesBasedOnCity = cityTitle => createSelector(
    [selectSoldProperties],
    properties => properties.find(property => property.id === CITY_TITLE_MAP[cityTitle])
)

// Select properties based on city - url param
export const selectCity = cityUrlParam =>
createSelector(
    [selectSoldProperties],
    properties => properties.find(property => property.id === CITY_ID_MAP[cityUrlParam])
)