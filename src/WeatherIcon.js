import React from "react";

export default function WeatherIcon(props) {
	const weatherIcons = require.context(`./Images`, true);

	return (
		<div className="WeatherIcon">
			<img
				src={weatherIcons(`./${props.code}.svg`)}
				alt={props.description}
				width={props.size}
			/>
		</div>
	);
}
