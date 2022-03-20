import {
    fetchingStartedAction,
    fetchingSucceedAction,
    // fetchingFailureAction,
} from '../store/slices/search';

import { 
    updatePlacesAction,
} from '../store/slices/entities';

// TODO: handle fetching errors
// TODO: can cause to race conditions, check category again when data loaded
export const fetchPlacesData = () => async (dispatch, getState) => {
    const state = getState();
    const categories = state.search.currentFoodFilter;

    dispatch(fetchingStartedAction());

    const query = {
        limit: 50,
        location: 'Berlin, Germany',
        term: 'restaurants',
        categories,
    };

    const urlParams = new URLSearchParams(query);
    const response = await fetch(`/-/search?${urlParams}`);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }

    const businesses = body.businesses || [];
    const businessesIds = businesses.map(data => data.id);

    dispatch(updatePlacesAction(businesses));
    dispatch(fetchingSucceedAction(businessesIds));
};
