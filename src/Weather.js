import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font awesome icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// loader
import { MutatingDots } from "react-loader-spinner";

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
		const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
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
				<div className="weatherContainer">
					<form onSubmit={handleSumbit}>
						<input
							type="search"
							placeholder="Search city"
							autoComplete="off"
							autoFocus="on"
							onChange={changeCity}
						/>
						<button
							type="submit"
							value=""
							role="none"
							aria-label="Search"
						>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								className="buttonIcon"
							/>
						</button>
					</form>
					<WeatherInfo data={weatherData} />
					<div className="forecastText mt-1 mb-3">Next 6 Days</div>
					<WeatherForecast coordinates={weatherData.coordinates} />
				</div>
				<footer>
					<img
						src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/024/977/original/Avatar_Idol-logos_transparent.png?1642341793"
						alt="Logo"
						className="logo"
					/>
					<a
						href="https://github.com/nina-jalen/react-meta-weather-app"
						target="_blank"
						rel="noreferrer"
						title="GitHub profile"
						className="webLink"
					>
						Open source code
					</a>{" "}
					by{" "}
					<a
						href="https://nina-jalen.github.io/"
						target="_blank"
						rel="noreferrer"
						title="Nina's webpage"
						className="webLink"
					>
						Nina Jalen
					</a>
				</footer>
			</div>
		);
	} else {
		search();
		return (
			<div className="Weather">
				<MutatingDots
					height="80"
					width="80"
					color="#F712A0"
					secondaryColor="#F712A0"
					radius="12.5"
					ariaLabel="mutating-dots-loading"
					visible={true}
					wrapperClass="justify-content-center loaderDots"
				/>
			</div>
		);
	}
}
