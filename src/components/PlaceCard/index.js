import React from 'react';

import { usePlaceData } from '../../store/slices/entities/selectors';

import './PlaceCard.css';

// TODO: React.memo in case of multiple rerenders
const PlaceCard = ({id}) => {
    const {
        image_url,
        name,
        url,
        location,
        display_phone,
    } = usePlaceData(id);

    return (
        <div className="card">
            <img src={image_url} alt={name} />
            <div className="container">
                <h4><a href={url}>{name}</a></h4>
                {
                    location &&
                    location.display_address &&
                    (
                        <p>
                            {location.display_address[0]}
                            <br />
                            {location.display_address[1]}
                        </p>
                    )
                }
                <p>{display_phone}</p>
            </div>
        </div>
    );
};

export default PlaceCard;
