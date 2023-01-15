import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="weather-container">
					<Weather defaultCity="Innsbruck" />
					
					{/* forecast */}
					<div className="forecast-text mt-3 mb-2">Next 7 Days</div>
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
				{/* footer */}
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
