export const getPosition = (data) => {
  return data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
    " "
  );
};
