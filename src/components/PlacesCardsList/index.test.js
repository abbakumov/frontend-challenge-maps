import React from 'react';
import { screen } from '@testing-library/react';

import { TEST_PLACES } from '../../../testData/places';

import { customRender } from '../../testUtils';
import { updatePlacesAction } from '../../store/slices/entities';
import { fetchingSucceedAction } from '../../store/slices/search';

import PlacesCardsList from '.';

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
