import { TEST_PLACES } from '../../../../testData/places';

import {
    initialState as entitiesInitialState,
    updatePlacesAction,
    entitiesSlice,
} from '.';

test('entities updatePlaces', () => {
    const entitiesReducer = entitiesSlice.reducer;
    const initialState = JSON.parse(JSON.stringify(entitiesInitialState)); // I know, not the best way to clone object
    const result = entitiesReducer(
        initialState,
        updatePlacesAction(TEST_PLACES)
    );

    expect(result).toEqual({
        places: {
            'CAoUMz4XJGvSVEccEOQ04A': {
                id: 'CAoUMz4XJGvSVEccEOQ04A',
                coordinates: {
                    latitude: 52.5323,
                    longitude: 13.38143,
                },
                display_phone: '+49 30 31168580',
                image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/dS_4HtqmQn0GyKr5u10t2g/o.jpg',
                name: 'Pascarella',
            },
            '6xWLh3tMHxwg3o9uSkpF0g': {
                id: '6xWLh3tMHxwg3o9uSkpF0g',
                coordinates: {
                    latitude: 52.522359,
                    longitude: 13.384006,
                },
                display_phone: '+49 30 85612456',
                image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/eDHVBWODbvXC-Jr8sof3Rw/o.jpg',
                name: 'Muckrakers Pizza',
            },
        },
    });
});
