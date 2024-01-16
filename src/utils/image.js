import Clear from "../assets/image_part_001.png";
import Mist from "../assets/Mist.png";
import Clouds from "../assets/image_part_004.png";
import Rain from "../assets/image_part_005.png";

export const getImage = (weather) => {
  let src = "";

  switch (weather) {
    case "Clear":
      src = Clear;
      break;
    case "Fog":
      src = Mist;
      break;
    case "Clouds":
      src = Clouds;
      break;
    case "Rain":
      src = Rain;
      break;
    default:
      return src;
  }

  return src;
};
