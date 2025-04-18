import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	function load() {
		let apiKey = "7e0645b54e0a0f4c0fa7443bo6fb8tf9";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}

	if (loaded) {
		return (
			<div className="WeatherForecast">
				<div className="row">
					{forecast.map(function (dailyForecast, index) {
						if (index < 6) {
							return (
								<div className="col" key={index}>
									<WeatherForecastDay data={dailyForecast} />
								</div>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>
		);
	} else {
		load();
		return null;
	}
}
