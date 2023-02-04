import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	// temperatures
	function maxTemperature() {
		let temperature = Math.round(props.data.temp.max);
		return `${temperature}°`;
	}

	function minTemperature() {
		let temperature = Math.round(props.data.temp.min);
		return `${temperature}°`;
	}

	// date
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div className="WeatherForecastDay">
			<div className="WeatherForecastDay-card">
				<div className="WeatherForecastDay-cardBody">
					<h5 className="WeatherForecastDay-day mb-3">{day()}</h5>
					<p className="WeatherForecastDay-temperature mb-2">
						{maxTemperature()}
					</p>
					<WeatherIcon code={props.data.weather[0].icon} size={42} />
					<p className="WeatherForecastDay-temperature mt-2">
						{minTemperature()}
					</p>
				</div>
			</div>
		</div>
	);
}
