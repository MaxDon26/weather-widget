import axios from "axios";
import { getPosition as getPositionUtils } from "../utils/getPosition";

export const getPosition = async (position) => {
  const { data } = await axios.get("https://geocode-maps.yandex.ru/1.x", {
    params: {
      apikey: "e5f1f9d2-c26e-40c8-8dc3-cee9dc741a43",
      geocode: position,
      format: "json",
    },
  });

  return getPositionUtils(data);
};
