import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch weather data");
      }

      const data = await response.json();

      setWeather(data.current_weather);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return <h2 className="loading">Loading Weather Information...</h2>;
  }

  if (error) {
    return <h2 className="error">Error: {error}</h2>;
  }

  return (
    <div className="weather-container">
      <h1>🌤 Weather Information System</h1>

      <h2>📍 Hyderabad</h2>

      <div className="weather-card">
        <p>🌡 Temperature: {weather.temperature} °C</p>

        <p>💨 Wind Speed: {weather.windspeed} km/h</p>

        <p>🧭 Wind Direction: {weather.winddirection}°</p>

        <p>⏰ Last Updated: {weather.time}</p>

        <p>🌦 Weather Code: {weather.weathercode}</p>

        <p>🌍 Latitude: 17.38</p>

        <p>🌍 Longitude: 78.48</p>

        <button
          className="refresh-btn"
          onClick={fetchWeather}
        >
          🔄 Refresh Weather
        </button>
      </div>
    </div>
  );
}

export default Weather;
