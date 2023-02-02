import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="Container">
				<Weather defaultCity="Innsbruck" />
			</div>
		</div>
	);
}
