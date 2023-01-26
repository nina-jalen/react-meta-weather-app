import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// font awesome icons
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			{/* city */}
			<h1 className="city-name">{props.data.city}</h1>
			<span className="country-name">{props.data.country}</span>
			{/* date */}
			<FormattedDate date={props.data.date} />
			{/* weather descripiton */}
			<div className="weather-description">{props.data.description}</div>
			{/* current weather */}
			<div className="row justify-content-start m-0 p-0 row-parent">
				{/* icon */}
				<div className="col-auto m-0 p-0">
					<WeatherIcon
						code={props.data.icon}
						description={props.data.description}
						size={70}
					/>
				</div>
				{/* current temperature & unit conversion */}
				<div className="col-auto ms-3 p-0">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				{/* weather data */}
				<div className="col-auto ms-4 p-0 d-none d-md-block">
					<div>
						<FontAwesomeIcon
							icon={faWind}
							color="white"
							opacity={0.8}
							className="dataIcon"
						/>
					</div>
					<div className="data-value">
						{Math.round(props.data.wind * 0.001 * 3600)}km/h
					</div>
					<div className="data-description">Wind</div>
				</div>
				<div className="col-auto ms-3 p-0 d-none d-md-block">
					<div>
						<FontAwesomeIcon
							icon={faDroplet}
							color="white"
							opacity={0.8}
							className="dataIcon"
						/>
					</div>
					<div className="data-value">{props.data.humidity}%</div>
					<div className="data-description">Humidity</div>
				</div>
			</div>
		</div>
	);
}
