import { useState } from "react";
import { TextField } from "../textField";
import "./style.css";
import { getPosition } from "../../services/geocoder.service";
import { getWeather } from "../../services/weather.service";
import { getImage } from "../../utils/image";
import ClockLoader from "react-spinners/ClockLoader";

export const Widget = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const pos = await getPosition(search);
      const weatherResponse = await getWeather(pos);
      setLoading(false);
      setWeather(weatherResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="widget">
      <form className="widget-form" onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={search} />
        {isLoading ? (
          <ClockLoader className="spinner" color="#94e9c9" size={150} />
        ) : weather ? (
          <>
            <h2 className="widget-title">{weather?.name}</h2>
            <img
              className="widget-image"
              src={getImage(weather.weather[0].main)}
              alt=""
            />
            <div className="info">
              <div className="info-temp">
                <span>Температура</span>
                <span>{weather.main.temp.toFixed()} C</span>
              </div>
              <div className="info-hum">
                {" "}
                <span>Влажность</span>
                <span>{weather.main.humidity}%</span>
              </div>
            </div>
            <p className="description">{weather.weather[0].description}</p>{" "}
          </>
        ) : null}

        <button className="widget-submit" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
