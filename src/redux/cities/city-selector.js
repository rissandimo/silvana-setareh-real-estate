import { createSelector } from 'reselect';

const selectDirectory = state => state.cities;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    cities => cities.cities
);