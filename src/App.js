import React from "react";
import "./App.css";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font awesome icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				{/* icons */}
				<div className="weather-container">
					{/* search bar */}
					<form>
						<div className="search-bar">
							<input
								type="search"
								placeholder="Search city"
								autoComplete="off"
							/>
							<button type="submit" className="search-button">
								<FontAwesomeIcon
									icon={faMagnifyingGlass}
									color="white"
								/>
							</button>
						</div>
					</form>
					<div className="city-name"></div>
					<span className="country-name"></span>
					<div className="current-date"></div>
					{/* current weather */}
					<div className="row justify-content-start current-weather-row">
						<div className="col-3 weather-icon-box">
							<img src="" alt="" className="current-icon" />
						</div>
						<div className="col-3 current-temperature-box">
							<div className="weather-description"></div>
							<div className="current-temperature"></div>
						</div>
					</div>
					<a href="/" className="celsius-description active">
						°C
					</a>
					<a href="/" className="fahrenheit-description">
						°F
					</a>
					<div className="wind-description">
						Wind speed
						<div className="wind-value"></div>
					</div>
					{/* weather forecast */}
					<div className="forecast-text">Next 7 Days</div>
					<div className="weather-forecast"></div>
				</div>
				<footer>
					<img
						src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/024/977/original/Avatar_Idol-logos_transparent.png?1642341793"
						alt="Logo"
						className="logo"
					/>
					<a
						href="https://github.com/nina-jalen/react-weather-app-project"
						target="_blank"
						rel="noreferrer"
						className="web-link"
					>
						Open-source code
					</a>{" "}
					by{" "}
					<a
						href="https://nina-jalen.github.io/"
						target="_blank"
						rel="noreferrer"
						className="web-link"
					>
						Nina Jalen
					</a>
				</footer>
			</div>
		</div>
	);
}
