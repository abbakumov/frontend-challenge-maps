import React from 'react';
import { useDispatch } from 'react-redux';

import { PLACE_TYPES, PLACE_TYPES_LIST } from '../../constants/filters';
import { useCurrentFoodFilter } from '../../store/slices/search/selectors';
import { changeFilterAndPlacesAction } from '../../store/slices/search';

const PlaceTypeFilter = () => {
    const currentFilter = useCurrentFoodFilter();
    const dispatch = useDispatch();

    return (
        <div>
            <label className="filter-label">Place Type:</label>
            <div className="filter-content">
                {PLACE_TYPES_LIST.map(type => (
                    <div key={type}>
                        <input
                            checked={currentFilter === PLACE_TYPES[type]}
                            type="radio"
                            value={type}
                            name="type"
                            onChange={() => dispatch(changeFilterAndPlacesAction(type))}
                        />
                        {type}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaceTypeFilter;
