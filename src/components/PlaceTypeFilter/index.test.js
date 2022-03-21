import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { customRender } from '../../testUtils'; // TODO: absolute paths in tests

import PlaceTypeFilter from '.';

test('PlaceTypeFilter renders "Place Type:" label', () => {
    customRender(<PlaceTypeFilter />);
    const input = screen.getByText('Place Type:');
    expect(input).toBeInTheDocument();
});

test('PlaceTypeFilter changes value to Burger if clicked', () => {
    customRender(<PlaceTypeFilter />);
    const burderRadioLable = screen.getByLabelText('Burger');
    expect(burderRadioLable.checked).toEqual(false);
    userEvent.click(burderRadioLable);
    expect(burderRadioLable.checked).toEqual(true);
});
