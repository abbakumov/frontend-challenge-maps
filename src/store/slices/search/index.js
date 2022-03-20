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
