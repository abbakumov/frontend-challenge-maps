import { useSelector } from 'react-redux';

// TODO: make root selector for state.search
export const usePlacesIds = () => useSelector(
    state => (state.search.placesIds),
);

export const useCurrentFoodFilter = () => useSelector(
    state => (state.search.currentFoodFilter),
);
