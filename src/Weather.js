import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font awesome icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ loaded: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			loaded: true,
			date: new Date(response.data.dt * 1000),
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
			city: response.data.name,
			country: response.data.sys.country,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			coordinates: response.data.coord,
		});
	}

	function search() {
		const apiKey = "062a6cf7a5122c2b6ddc6f1bcfcc2e0f";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios.get(apiUrl).then(handleResponse);
	}

	function handleSumbit(event) {
		event.preventDefault();
		search();
	}

	function changeCity(event) {
		setCity(event.target.value);
	}

	if (weatherData.loaded) {
		return (
			<div className="Weather">
				<form onSubmit={handleSumbit}>
					<input
						type="search"
						placeholder="Search city"
						autoComplete="off"
						autoFocus="on"
						onChange={changeCity}
					/>
					<button type="submit" value="/">
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							color="white"
							opacity={0.8}
						/>
					</button>
				</form>
				<WeatherInfo data={weatherData} />
				<div className="forecastText mt-1 mb-3">Next 6 Days</div>
				<WeatherForecast coordinates={weatherData.coordinates} />
			</div>
		);
	} else {
		search();
		return "The app is loading ...";
	}
}
