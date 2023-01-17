import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="weather-container">
					<Weather defaultCity="Innsbruck" />
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
		</div>
	);
}
