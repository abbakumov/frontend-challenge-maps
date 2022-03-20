import React from 'react';

import './PlacesCardsList.css';

import { usePlacesIds } from '../../store/slices/search/selectors';

import PlaceCard from '../PlaceCard';

const PlacesCardsList = () => {
    const placesIds = usePlacesIds();

    return (
        <div className="places-container">
            {placesIds.map(placeId => (
                <PlaceCard key={placeId} id={placeId} />
            ))}
        </div>
    );
};

export default PlacesCardsList;
