/**
 * Challenge-related comment:
 *
 * This state part contains ids of currently filtered product items
 * Why not to store just items array? – To have cache in redux store,
 *     but mostly because it's much easier to get IDs in list component
 *     and each product data in item components without searching through all list.
 * 
 * What I would like to add here:
 * 1. Nice fetching status handling with error catching and other
 * 2. Maybe move fetching status to other redux slice to use it for all methods
 * 3. Filters can be moved to other slice as well
 */

import { createSlice } from '@reduxjs/toolkit';

import { PLACE_TYPES } from '../../../constants/filters';
import { fetchPlacesData } from '../../commonAsyncActions';

const FETCH_STATUS = {
    EMPTY: 'EMPTY',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
};

const initialState = {
    currentFoodFilter: PLACE_TYPES.Any,
    placesIds: [],
    fetchStatus: FETCH_STATUS.EMPTY,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        fetchingStarted: (state) => {
            state.fetchStatus = FETCH_STATUS.IN_PROGRESS;
        },
        fetchingSucceed: (state, { payload }) => {
            state.placesIds = payload;
            state.fetchStatus = FETCH_STATUS.SUCCESS;
        },
        fetchingFailure: (state) => {
            state.fetchStatus = FETCH_STATUS.FAIL;
        },
        changeFilter: (state, { payload }) => {
            state.currentFoodFilter = PLACE_TYPES[payload];
        },
    },
});

export const {
    fetchingStarted: fetchingStartedAction,
    fetchingSucceed: fetchingSucceedAction,
    fetchingFailure: fetchingFailureAction,
    changeFilter: changeFilterAction,
} = searchSlice.actions;

export const changeFilterAndPlacesAction = (categories) => async (dispatch) => {
    dispatch(changeFilterAction(categories));
    dispatch(fetchPlacesData());
};

export default searchSlice.reducer;
