// 12 inch in 1 feet;

function inchToFeet(inch) {
  const feet = inch / 12;
  const inchFraction = inch % 12;

  const result = parseInt(feet) + " ft " + "" + inchFraction + " inch.";
  return result;
}

const result = inchToFeet(75);
console.log(result);
