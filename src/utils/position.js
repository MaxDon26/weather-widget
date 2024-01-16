export const getPositionUtils = (data) => {
  return data?.response?.GeoObjectCollection?.featureMember[0].GeoObject?.Point.pos.split(
    " "
  );
};
