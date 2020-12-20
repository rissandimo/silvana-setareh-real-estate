import { createSelector } from 'reselect';

const selectProperties = state => state.properties;

export const selectSoldProperties = createSelector(
    [selectProperties],
    properties => properties.soldProperties
)