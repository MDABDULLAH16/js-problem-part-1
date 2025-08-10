function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }

  let sum = 0;
  for (const num of odds) {
    sum = sum + num;
  }
  if (odds.length === 0) {
    return "odd number not found";
  }
  const count = odds.length;

  const average = sum / count;
  return average.toFixed(2);
}

const numbers = [23, 34, 45, 33, 54, 55, 65, 77, 99];
const result = oddAverage(numbers);
console.log(result);
