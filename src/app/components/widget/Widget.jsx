import style from "./Widget.module.sass";
import { getPosition } from "../../services/geokoder.service";
import { getWeather } from "../../services/weather.service";
import { useRef, useState } from "react";
import { getImage } from "../../utils/getImage";
import cels from "../../assets/cels.svg";
import { TextField } from "../TextField";
import { PuffLoader } from "react-spinners";

export const Widget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const ref = useRef("");
  console.log(window.screen.width);

  const handleClick = async () => {
    setisLoading(true);
    setWeatherData(null);
    const position = await getPosition(ref.current.value);
    const { data } = await getWeather(position);

    setWeatherData(data);
    setisLoading(false);
  };
  return (
    <div
      className={style.widget + " " + (weatherData ? style.widgetActive : "")}
    >
      <TextField ref={ref} placeholder="Введите название города" />
      {weatherData ? (
        <>
          <h2 className={style.widgetTitle}>{weatherData.name}</h2>
          <img
            className={style.image}
            src={getImage(weatherData.weather[0].main)}
            alt="img"
          />
          <div className={style.info}>
            <div className={style.wrapper}>
              <span className={style.infoTitle}>Температура</span>
              <div className={style.infoContent}>
                {weatherData.main.temp.toFixed()}
                <img src={cels} />
              </div>
            </div>

            <div className={style.wrapper}>
              <span className={style.infoTitle}>Влажность</span>
              <span>{weatherData.main.humidity}%</span>
            </div>
          </div>
          <div className={style.description}>
            {weatherData.weather[0].description}
          </div>
        </>
      ) : isLoading ? (
        <PuffLoader color="#282880" />
      ) : null}
      <button className={style.submit} onClick={handleClick}>
        Отправить
      </button>
    </div>
  );
};
