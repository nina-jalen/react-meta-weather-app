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
					<div className="date">Sunday 8 Jan&nbsp; 18:39</div>
					{/* current weather */}
					<div className="row m-0 p-0 row-parent">
						<div className="col m-0 p-0">
							<img
								src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
								alt="Weather icon"
								className="current-icon"
							/>
						</div>
						<div className="col m-0 p-0">
							<div className="current-temperature d-flex">
								<span className="value">26</span>
								<span className="unit">°C</span>
								<span className="unit">°F</span>
							</div>
							<div className="weather-description">
								Broken clouds
							</div>
						</div>
						<div className="col-6 m-0 p-0 ">
							<div className="row row-cols-3 m-0 p-0 row-child">
								<div className="col m-0 p-0">
									<div className="data-value">17°</div>
									<div className="data-description">High</div>
								</div>
								<div className="col m-0 p-0">
									<div className="data-value">9mph</div>
									<div className="data-description">Wind</div>
								</div>
								<div className="col m-0 p-0">
									<div className="data-value">06:23</div>
									<div className="data-description">
										Sunrise
									</div>
								</div>
								<div className="col m-0 p-0">
									<div className="data-value">10°</div>
									<div className="data-description">Low</div>
								</div>
								<div className="col m-0 p-0">
									<div className="data-value">25%</div>
									<div className="data-description">Rain</div>
								</div>
								<div className="col m-0 p-0">
									<div className="data-value">18:46</div>
									<div className="data-description">
										Sunset
									</div>
								</div>
							</div>
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
					<div className="forecast">
						<div className="row">
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Mon</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Tue</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Wed</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Thu</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Fri</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card">
									<div className="card-body">
										<h5 className="day">Sat</h5>
										<p className="temperature">6°</p>
										<img
											src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/061/895/original/clouds-and-sun.png?1673199874"
											alt="Weather icon"
											className="icon"
										/>
										<p className="temperature">-3°</p>
									</div>
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
