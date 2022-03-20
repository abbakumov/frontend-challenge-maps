import React from 'react';

import PlacesCardsList from '../PlacesCardsList';

import './Main.css';

const COORDS = {
	'Europe/Berlin': {lat: 52.518611, lng: 13.408333}
}

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
				<PlacesCardsList />
			</main>
		);
	}
}

export default Main;
