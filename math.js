const min = Math.min(12, 22, 22, 23, 44, 21, 9, 3, 434);
console.log(min);
const max = Math.max(12, 22, 22, 23, 44, 21, 9, 3, 434);
console.log(max);

const abs = Math.abs(5 - 20);
console.log(abs);

const floor = Math.floor(12.32);
const ceiling = Math.ceil(12.32);
const round = Math.round(12.32);
console.log(floor, ceiling, round);

const random = Math.random() * 100000;
console.log(random);
const fixedRandom = Math.round(random);
console.log(fixedRandom);

const piValue = Math.PI;
console.log(piValue);

// ঘাত(Power / Exponentiation);
// ঘাত = Math.pow(number, exponent);
// যখন তুমি বলো ২ এর ঘাত ৩ (বা ২³), এর মানে হলো ২ কে ৩ বার নিজে সাথে গুণ করা:
// ২ × ২ × ২ = ৮

const power = Math.pow(2, 3);
console.log(power); // ২ × ২ × ২ = ৮

//বর্গমূল = Math.pow(number, 1/2)
const squareRoot = Math.pow(16, 1 / 2);
console.log(squareRoot);
// ঘনমূল = Math.pow(number, 1 / 3);
// ঘনমূল হলো এমন একটা সংখ্যা যা নিজেকে তিনবার গুণ করলে তোমার দেওয়া সংখ্যা পায়।
const cubeRoot = Math.pow(27, 1 / 3);
console.log(cubeRoot);
