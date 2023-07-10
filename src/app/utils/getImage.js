import Clear from "../assets/image_part_001.png";
import Mist from "../assets/Mist.png";
import Clouds from "../assets/image_part_004.png";
import Rain from "../assets/image_part_005.png";

export const getImage = (img) => {
  let src = "";

  switch (img) {
    case "Clear":
      src = Clear;
      break;
    case "Clouds":
      src = Clouds;
      break;
    case "Rain":
      src = Rain;
      break;
    case "Mist":
      src = Mist;
      break;
  }

  return src;
};
