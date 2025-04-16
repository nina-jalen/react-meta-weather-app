import React from "react";

// Map readable weather codes to SVG filenames (Images file)
const iconMap = {
  "clear-sky-day": "01d",
  "clear-sky-night": "01n",
  "few-clouds-day": "02d",
  "few-clouds-night": "02n",
  "scattered-clouds-day": "03d",
  "scattered-clouds-night": "03n",
  "broken-clouds-day": "04d",
  "broken-clouds-night": "04n",
  "shower-rain-day": "09d",
  "shower-rain-night": "09n",
  "rain-day": "10d",
  "rain-night": "10n",
  "thunderstorm-day": "11d",
  "thunderstorm-night": "11n",
  "snow-day": "13d",
  "snow-night": "13n",
  "mist-day": "50d",
  "mist-night": "50n",
};

export default function WeatherIcon(props) {
  const weatherIcons = require.context(`./Images`, true);
  const fileName = iconMap[props.code];

  return (
    <div className="WeatherIcon">
      <img
        src={weatherIcons(`./${fileName}.svg`)}
        alt={props.description || props.code}
        width={props.size}
      />
    </div>
  );
}
