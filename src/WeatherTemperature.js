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
				<span className="WeatherTemperature-value">
					{Math.round(props.celsius)}
				</span>
				<span className="WeatherTemperature-unit">°C</span>
				<span className="ms-2">
					<a
						href="/"
						title="Show degrees Fahrenheit"
						onClick={showFahrenheit}
					>
						°F
					</a>
				</span>
			</div>
		);
	} else {
		let fahrenheit = props.celsius * 1.8 + 32;

		return (
			<div className="WeatherTemperature">
				<span className="WeatherTemperature-value">
					{Math.round(fahrenheit)}
				</span>
				<span className="WeatherTemperature-unit">
					<a
						href="/"
						title="Show degrees Celsius"
						onClick={showCelsius}
					>
						°C
					</a>
				</span>
				<span className="ms-2 WeatherTemperature-unit">°F</span>
			</div>
		);
	}
}
