import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import { customRender } from '../../testUtils';
import { updatePlacesAction } from '../../store/slices/entities';
import { fetchingSucceedAction } from '../../store/slices/search';

import PlacesCardsList from '.';

const TEST_PLACES = [
    {
        id: 'CAoUMz4XJGvSVEccEOQ04A',
        coordinates: {
            latitude: 52.5323,
            longitude: 13.38143,
        },
        display_phone: '+49 30 31168580',
        image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/dS_4HtqmQn0GyKr5u10t2g/o.jpg',
        name: 'Pascarella',
    },
    {
        id: '6xWLh3tMHxwg3o9uSkpF0g',
        coordinates: {
            latitude: 52.522359,
            longitude: 13.384006
        },
        display_phone: '+49 30 85612456',
        image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/eDHVBWODbvXC-Jr8sof3Rw/o.jpg',
        name: 'Muckrakers Pizza',
    },
]

test('PlacesCardsList displays places', () => {
    customRender(<PlacesCardsList prop="pop" />, {
        initialActions: [
            updatePlacesAction(TEST_PLACES),
            fetchingSucceedAction(TEST_PLACES.map(place => place.id)),
        ],
    });
    const firstPlace = screen.getByText('Pascarella');
    expect(firstPlace).toBeInTheDocument();
    const secondPlace = screen.getByText('Muckrakers Pizza');
    expect(secondPlace).toBeInTheDocument();
});
