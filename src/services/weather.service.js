import axios from "axios";

export const getWeather = async ([lon, lat]) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lon,
        lat,
        lang: "ru",
        units: "metric",
        appid: "1fd15b7c0a8451d075c158a8f41c9eb1",
      },
    }
  );

  return data;
};
