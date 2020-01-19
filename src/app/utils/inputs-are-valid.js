export const inputsAreValid = (...input) => input.every(num => typeof num === "number" && !isNaN(num));
