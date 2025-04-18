import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import { MutatingDots } from "react-loader-spinner";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ loaded: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData({
			loaded: true,
			date: new Date(response.data.time * 1000),
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			city: response.data.city,
			country: response.data.country,
			coordinates: response.data.coordinates,
			description: response.data.condition.description,
			icon: response.data.condition.icon,
		});
	}

	function search() {
		const apiKey = "7e0645b54e0a0f4c0fa7443bo6fb8tf9";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

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
					<form onSubmit={handleSumbit} className="d-flex">
						<input
							type="search"
							placeholder="Search city"
							autoComplete="off"
							autoFocus="on"
							onChange={changeCity}
							aria-label="Search"
						/>
						<button
							type="submit"
							value=""
							role="none"
							title="Search"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="magnifying-glass"
								class="svg-inline--fa fa-magnifying-glass d-block buttonIcon"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="buttonIcon"
							>
								<path
									fill="currentColor"
									d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
								></path>
							</svg>
						</button>
					</form>
					<WeatherInfo data={weatherData} />
					<div className="mt-1 mb-3 forecastText">Next 6 Days</div>
					<WeatherForecast coordinates={weatherData.coordinates} />
				</div>
				<footer className="text-center">
					<img
						src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/024/977/original/Avatar_Idol-logos_transparent.png?1642341793"
						alt="Logo"
						className="logo"
					/>
					<a
						href="https://github.com/nina-jalen/react-meta-weather-app"
						target="_blank"
						title="GitHub profile"
						className="text-decoration-none webLink"
						rel="noopener noreferrer"
					>
						Open source code
					</a>{" "}
					by{" "} Nina Jalen
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
