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

