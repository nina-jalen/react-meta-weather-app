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
						<input
							type="search"
							placeholder="Search city"
							autoComplete="off"
						/>
						<button type="submit" className="search-button">
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								color="white"
								opacity={0.8}
							/>
						</button>
					</form>
					<div className="city-name">Innsbruck</div>
					<span className="country-name">AT</span>
					<div className="current-date">Sunday 8 Jan&nbsp; 18:39</div>
					{/* current weather */}
					<div className="row justify-content-start current-weather-row">
						<div className="col-3 weather-icon-box">
							<img
								src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
								alt="Weather icon"
								className="current-icon"
							/>
						</div>
						<div className="col-3 current-temperature-box">
							<div className="weather-description">
								Broken clouds
							</div>
							<div className="current-temperature">26°</div>
						</div>
					</div>
					<a href="/" className="celsius-description active">
						°C
					</a>
					<a href="/" className="fahrenheit-description">
						°F
					</a>
					{/* weather forecast */}
					<div className="forecast-text">Next 7 Days</div>
					<div className="weather-forecast">
						<div className="col-md">
							<div className="card">
								<div className="card-body">
									<h5 className="card-day">Mon</h5>
									<p className="card-temperature">6°</p>
									<img
										src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
										alt="Weather icon"
										className="forecast-icon"
									/>
									<p className="card-temperature">-3°</p>
								</div>
							</div>
						</div>
						<div className="col-md">
							<div className="card">
								<div className="card-body">
									<h5 className="card-day">Mon</h5>
									<p className="card-temperature">6°</p>
									<img
										src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
										alt="Weather icon"
										className="forecast-icon"
									/>
									<p className="card-temperature">-3°</p>
								</div>
							</div>
						</div>
					</div>
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
