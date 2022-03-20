import React from 'react';

import { COORDS } from '../../constants/geo';

import Filters from '../Filters';
import PlacesCardsList from '../PlacesCardsList';

import './Main.css';

class Main extends React.Component {
	state = {
		businesses: []
	}

	mapsApiLoaded = null;
	mapInstance = null;

	componentDidMount() {
		this.mapsApiLoaded = window.setTimeout(this.checkMapsApi.bind(this), 200);
	}

	checkMapsApi() {
		if (window.google && window.google.maps) {
			window.clearTimeout(this.mapsApiLoaded);
			this.initMap();
		}
	}

	initMap() {
		const mapEl = document.getElementById('places-map');
		if (mapEl && !this.mapInstance) {
			this.mapInstance = new window.google.maps.Map(mapEl, {
				center: COORDS['Europe/Berlin'],
				zoom: 8
			});
		}
	}

	render() {
		return (
			<main>
				<div id='places-map' className='places-map'></div>
				<div className="places-list-and-filters">
					<Filters />
					<PlacesCardsList />
				</div>
			</main>
		);
	}
}

export default Main;
