import { createSlice } from '@reduxjs/toolkit';

const FETCH_STATUS = {
    EMPTY: 'EMPTY',
    IN_PROGRESS: 'IN_PROGRESS',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
};

const initialState = {
    currentFoodFilter: null,
    filteredIds: [],
    fetchStatus: FETCH_STATUS.EMPTY,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        fetchingStarted: (state) => {
            state.fetchStatus = FETCH_STATUS.IN_PROGRESS;
        },
        fetchingSucceed: (state) => {
            state.fetchStatus = FETCH_STATUS.SUCCESS;
        },
        fetchingFailure: (state) => {
            state.fetchStatus = FETCH_STATUS.FAIL;
        },
    },
});

export const {
    fetchingStarted: fetchingStartedAction,
    fetchingSucceed: fetchingSucceedAction,
    fetchingFailure: fetchingFailureAction,
} = searchSlice.actions;

export default searchSlice.reducer;
