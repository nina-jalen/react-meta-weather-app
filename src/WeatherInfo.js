import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			{/* city */}
			<h1 className="city-name">{props.data.city}</h1>
			<span className="country-name">{props.data.sys.country}</span>
			{/* date */}
			<FormattedDate date={props.data.date} />
			{/* current weather */}
			<div className="row justify-content-start m-0 p-0 row-parent">
				{/* icon */}
				<div className="col-auto m-0 p-0">
					<WeatherIcon code={props.data.icon} size={52} />
				</div>
				<div className="col-auto ms-3 p-0">
					<div className="current-temperature d-flex">
						{/* current temperature & unit conversion */}
						<WeatherTemperature celsius={props.data.temperature} />
					</div>
					{/* weather data */}
					<div className="weather-description">
						{props.data.description}
					</div>
				</div>
				<div className="col-auto ms-4 p-0 d-none d-md-block">
					<div className="data-value">
						{Math.round(props.data.wind)}km/h
					</div>
					<div className="data-description">Wind</div>
				</div>
				<div className="col-auto ms-3 p-0 d-none d-md-block">
					<div className="data-value">{props.data.humidity}%</div>
					<div className="data-description mb-1">Humidity</div>
				</div>
			</div>
		</div>
	);
}
