import React from 'react';

import PlaceTypeFilter from '../PlaceTypeFilter';

import './Filters.css'

// We definitely will have more than one filter :)
const Filters = () => (
    <div className="filters-container">
        <PlaceTypeFilter />
    </div>
);

export default Filters;
