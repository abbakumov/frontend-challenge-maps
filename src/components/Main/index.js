import React from 'react';

import Filters from '../Filters';
import PlacesCardsList from '../PlacesCardsList';
import PlacesMap from '../PlacesMap';

import './Main.css';

const Main = () => (
	<main>
		<PlacesMap />
		<div className="places-list-and-filters">
			<Filters />
			<PlacesCardsList />
		</div>
	</main>
);

export default Main;
