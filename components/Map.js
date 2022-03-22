import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const style = {
	wrapper: `flex-1 h-full w-full`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBNOX_ACCESS_TOKEN;

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [41.84959767918338, -87.57031914368818],
			zoom: 3,
		});
	}, []);
	return <div className={style.wrapper} id="map" />;
};

export default Map;
