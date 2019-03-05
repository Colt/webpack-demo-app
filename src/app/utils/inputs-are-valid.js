const inputsAreValid = (...input) => {
  return input.every(num => typeof num === "number" && !isNaN(num));
};
