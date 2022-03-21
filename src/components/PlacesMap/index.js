/**
 * Challenge-related comment:
 * Did't have time to implement must have feature,
 * highlighting pin and product card when hovering one or another.
 * It's easy to implement it through one Redux field "highlightedItemId".
 * 
 * What I would like to add here:
 * 1. Remove all constants and magic values to special place
 * 2. Market with title or something to identify place
 */

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { COORDS } from '../../constants/geo';
import { usePlacesGeo } from '../../store/commonSelectors';

const PlacesMap = () => {
    const containerStyle = {
        width: '100%',
        height: '360px'
    };

    const center = COORDS['Europe/Berlin'];

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const markersPositions = usePlacesGeo();

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
        >
            {markersPositions.map(({id, position}) => (
                <Marker key={id} position={position} />
            ))}
        </GoogleMap>
    ) : <div>loading maps</div>;
};

export default PlacesMap;

