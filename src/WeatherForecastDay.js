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
			<div className="card">
				<div className="card-body">
					<h5 className="WeatherForecast-day">{day()}</h5>
					<p className="WeatherForecast-temperature">
						{maxTemperature()}
					</p>
					<WeatherIcon code={props.data.weather[0].icon} size={42} />
					<p className="WeatherForecast-temperature">
						{minTemperature()}
					</p>
				</div>
			</div>
		</div>
	);
}
