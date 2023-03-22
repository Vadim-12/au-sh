import React, { memo } from 'react'

const MapWrapper = memo(
	() => {
		return (
			<div id='map-container'></div>
		)
	},
	() => true
)

export default MapWrapper