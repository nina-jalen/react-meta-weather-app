import React from "react";
import "./App.css";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function App() {
	return (
		<div className="App">
			<div className="container">React Meta Weather App</div>
			<FontAwesomeIcon icon={faLocationArrow} />
			<FontAwesomeIcon icon={faMagnifyingGlass} />
		</div>
	);
}
