export const normaliseOccupancyData = data => {
  return data.x_axis.map((item, index) => {
    return { x: item, y: data.y_axis[index] };
  });
};

export const toNumerical = data => {
  return data.map(item => {
    return parseFloat(item);
  });
};
