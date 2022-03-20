import { usePlacesData } from './slices/entities/selectors';
import { usePlacesIds } from './slices/search/selectors';

// TODO: rewrite with reselect
export const usePlacesGeo = () => {
    const placesData = usePlacesData();
    const placesIds = usePlacesIds();
    return placesIds
        .map(id => ({
            id,
            position: {
                lat: placesData[id].coordinates.latitude,
                lng: placesData[id].coordinates.longitude,
            },
        }));
};
