import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    places: {},
};

export const entitiesSlice = createSlice({
    name: 'entities',
    initialState,
    reducers: {
        updatePlaces: (state, {payload: places}) => {
            for (let i = 0; i < places.length; ++i) {
                state.places[places[i].id] = places[i];
            }
        },
    },
});

export const {
    updatePlaces: updatePlacesAction,
} = entitiesSlice.actions;

export default entitiesSlice.reducer;
