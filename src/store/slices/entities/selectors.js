import { useSelector } from 'react-redux';

// TODO: make root selector for state.search
export const usePlaceData = (id) => useSelector(
    state => (state.entities.places[id]),
);

export const usePlacesData = () => useSelector(
    state => (state.entities.places),
);
