import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="WeatherInfo">
			{/* city */}
			<h1 className="cityName mt-2 mb-1 me-1">{props.data.city}</h1>
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
				<div className="col-auto d-flex ms-3 p-0">
					<WeatherTemperature celsius={props.data.temperature} />
				</div>
				{/* weather data */}
				<div className="col-auto ms-4 p-0 weatherData">
					<div>
						<img
							src={require(`./Icons/wind.png`)}
							alt="Wind logo"
							className="dataIcon my-2"
							style={{ height: "24px" }}
						/>
					</div>
					<div className="dataValue mb-2">
						{Math.round(props.data.wind * 0.001 * 3600)}km/h
					</div>
					<div className="dataDescription">Wind</div>
				</div>
				<div className="col-auto ms-3 p-0 weatherData">
					<div>
						<img
							src={require(`./Icons/humidity.png`)}
							alt="Humidity logo"
							className="dataIcon my-2"
							style={{ height: "23px" }}
						/>
					</div>
					<div className="dataValue mb-2">{props.data.humidity}%</div>
					<div className="dataDescription">Humidity</div>
				</div>
			</div>
		</div>
	);
}
