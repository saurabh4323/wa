import React, { useEffect, useState } from "react";
import "./weather.css";
import axios from "axios";

const Weather = () => {
  const [city, setcity] = useState({
    name: "",
  });
  const [weather, setWeather] = useState({
    description: "",
    temp: "",
    humidity: "",
    windSpeed: "",
  });
  const ans = async () => {
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const apiKey = "8cc4fea8a145057a85d637872b337828";
    const response = await axios.get(
      `${apiUrl}+` + `${city.name}+` + `&appid=${apiKey}`
    );
    const weatherData = response.data;
    setWeather({
      description: weatherData.weather[0].description,
      temp: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
    });

    console.log("Weather Descriptionss:", weather.humidity);
    // console.log(response.data[0].weather.description);
  };
  useEffect(() => {
    ans();
  }, [city]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcity((prevcity) => ({ ...prevcity, [name]: value }));
  };
  return (
    <div className="hell">
      <div className="card" style={{}}>
        <h1> You are searching for {city.name}</h1>
        <div className="search">
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={city.name}
            placeholder="Enter City Name"
          />
        </div>
        <div className="weather">
          <img src="rain.png" className="weather-icon" alt="Weather Icon" />
          <h1 className="temp">{weather.temp}</h1>
          <h2 className="city">
            {city.name.length === 0 ? "delhi" : city.name}
          </h2>
        </div>
        <div className="details">
          <div className="humid">
            <img src="humidity.png" className="humidity1" alt="Humidity Icon" />
            <p className="humidity">
              {weather.humidity.length === 0 ? "15.1" : weather.humidity}
            </p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <img src="wind.png" className="wind-icon" alt="Wind Icon" />
            <p className="winds">
              {" "}
              {weather.windSpeed.length === 0 ? "10.1" : weather.windSpeed}
            </p>
            <p className="winds">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
