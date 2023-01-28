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
			<h1 className="cityName">{props.data.city}</h1>
			<span className="countryName">{props.data.country}</span>
			{/* date */}
			<FormattedDate date={props.data.date} />
			{/* descripiton */}
			<div className="weatherDescription">{props.data.description}</div>
			{/* current weather */}
			<div className="row justify-content-start m-0 p-0 row-parent">
				{/* icon */}
				<div className="col-auto m-0 p-0">
					<WeatherIcon
						code={props.data.icon}
						description={props.data.description}
						size={90}
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
					<div className="dataValue">
						{Math.round(props.data.wind * 0.001 * 3600)}km/h
					</div>
					<div className="dataDescription">Wind</div>
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
					<div className="dataValue">{props.data.humidity}%</div>
					<div className="dataDescription">Humidity</div>
				</div>
			</div>
		</div>
	);
}
