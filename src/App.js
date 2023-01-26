import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="weatherContainer">
					<Weather defaultCity="Innsbruck" />
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
						className="webLink"
					>
						Open source code
					</a>{" "}
					by{" "}
					<a
						href="https://nina-jalen.github.io/"
						target="_blank"
						rel="noreferrer"
						className="webLink"
					>
						Nina Jalen
					</a>
				</footer>
			</div>
		</div>
	);
}
