import React, { useState } from "react";

export default function WeatherTemperature(props) {
	const [unit, setUnit] = useState("celsius");

	function showFahrenheit(event) {
		event.preventDefault();
		setUnit("fahrenheit");
	}

	function showCelsius(event) {
		event.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<div className="WeatherTemperature">
				<span className="value">{Math.round(props.celsius)}</span>
				<span className="unit-c ">
					<a href="/">°C</a>
				</span>
				<span className="unit-f ms-1">
					<a href="/" onClick={showFahrenheit}>
						°F
					</a>
				</span>
			</div>
		);
	} else {
		let fahrenheit = props.celsius * 1.8 + 32;

		return (
			<div className="WeatherTemperature">
				<span className="value">{Math.round(props.fahrenheit)}</span>
				<span className="unit-c">
					<a href="/" onClick={showCelsius}>
						°C
					</a>
				</span>
				<span className="unit-f ms-1">
					<a href="/">°F</a>
				</span>
			</div>
		);
	}
}
