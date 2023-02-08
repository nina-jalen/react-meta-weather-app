import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			{/* city */}
			<h1 className="mt-2 mb-1 me-1 d-inline-block text-capitalise cityName">
				{props.data.city}
			</h1>
			<span className="countryName">{props.data.country}</span>
			{/* date */}
			<FormattedDate date={props.data.date} />
			{/* descripiton */}
			<div className="weatherDescription">{props.data.description}</div>
			{/* current weather */}
			<div className="row m-0">
				{/* icon */}
				<div className="col-auto p-0">
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
				<div className="col-auto ms-4 p-0 weatherData">
					<div>
						<img
							src={require(`./Icons/wind.png`)}
							alt="Wind logo"
							className="my-2 dataIcon"
							style={{ height: "24px", width: "auto" }}
						/>
					</div>
					<div className="text-center mb-2 dataValue">
						{Math.round(props.data.wind * 0.001 * 3600)}km/h
					</div>
					<div className="text-center dataDescription">Wind</div>
				</div>
				<div className="col-auto ms-3 p-0 weatherData">
					<div>
						<img
							src={require(`./Icons/humidity.png`)}
							alt="Humidity logo"
							className="my-2 dataIcon"
							style={{ height: "23px", width: "auto" }}
						/>
					</div>
					<div className="text-center mb-2 dataValue">
						{props.data.humidity}%
					</div>
					<div className="text-center dataDescription">Humidity</div>
				</div>
			</div>
		</div>
	);
}
