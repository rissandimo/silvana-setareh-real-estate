import { createSelector } from 'reselect';

export const selectCity = state => state.cities;

export const selectSoldPropertyCities = createSelector(
    [selectCity],
    cities => cities.cities
);