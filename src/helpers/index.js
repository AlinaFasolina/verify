export const getCircleSize = (amount) => {
  if (amount <= 10) {
    return "sm";
  } else if (amount > 10 && amount <= 30) {
    return "md";
  } else if (amount > 30 && amount <= 45) {
    return "lg";
  } else if (amount > 45) {
    return "xl";
  }
};
