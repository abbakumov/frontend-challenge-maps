/**
 * Challenge-related comment:
 *
 * Remade whole component.
 * Because it will grow up 10 lines/sec in case we have some business or view logic here.
 * So I just made it root layout component and moved all other logic to view components and store.
 */

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
