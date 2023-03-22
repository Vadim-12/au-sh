import React, { useEffect } from 'react'
import { load } from '@2gis/mapgl'

const Map = () => {
	useEffect(() => {
		let map: any = null
		load().then((mapglAPI) => {
			map = new mapglAPI.Map('map-container', {
				center: [61.67538811487096, 50.80037355422974],
				zoom: 16,
				key: '0c104b4c-782f-44c0-b252-93db5814105e'
			})
		})
		
		return () => map && map.destroy()
	}, [])
}

export default Map
//https://docs.2gis.com/ru/mapgl/overview