import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	// temperatures
	function maxTemperature() {
		let temperature = Math.round(props.data.temperature.maximum);
		return `${temperature}°`;
	}

	function minTemperature() {
		let temperature = Math.round(props.data.temperature.minimum);
		return `${temperature}°`;
	}

	// date
	function day() {
		let date = new Date(props.data.time * 1000);
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

		return days[day];
	}

	return (
		<div className="WeatherForecastDay">
			<div className="WeatherForecastDay-card">
				<div className="WeatherForecastDay-cardBody">
					<div className="text-center WeatherForecastDay-day">
						{day()}
					</div>
					<p className="text-center mb-2 WeatherForecastDay-maxTemperature">
						{maxTemperature()}
					</p>
					<WeatherIcon
						code={props.data.condition.icon}
						description={props.data.condition.description}
						size={42}
					/>
					<p className="text-center mt-2 WeatherForecastDay-minTemperature">
						{minTemperature()}
					</p>
				</div>
			</div>
		</div>
	);
}
