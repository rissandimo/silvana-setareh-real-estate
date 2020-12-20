import { createSelector } from 'reselect';

const CITY_ID_MAP = {
    beverlyHills: 1,
    losAngeles: 2,
    westHollywood: 3
}

const selectProperties = state => state.properties;

export const selectSoldProperties = createSelector(
    [selectProperties],
    properties => properties.soldProperties
)

export const selectCity = cityUrlParam =>
createSelector(
    [selectSoldProperties],
    properties => properties.find(property => property.id === CITY_ID_MAP[cityUrlParam])
)