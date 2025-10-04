const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// Using dot and bracket notation, set the variable secondTree to the second element in the list array from the second object in the myPlants array.
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list;
// console.log(secondTree);

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");

// Setup
// const myArray = [];

// // Only change code below this line
// let i = 5;
// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }

// const myArray = [];

// for (let i = 1; i <= 9; i += 2) {
//   myArray.push(i);
// }
// console.log(myArray);

// Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total = total + i;
// }
// console.log(total);
// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let index = 0; index < arr[i].length; index++) {
//     const element = arr[i][index];
//     console.log(element);
//   }
// }

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (i = 0; i < arr.length; i++) {
//     for (let index = 0; index < arr[i].length; index++) {
//       product *= arr[i][index];
//     }
//   }

//   // Only change code above this line
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0; // base case
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }
// sum([2, 3, 4, 5], 3);
// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//     return "No such contact";
//   }

//   // Only change code above this line
// }

// lookUpProfile("Akira", "likes");

// function countdown(n) {
//   const arr = [];
//   for (let i = n; i > 0; i--) {
//     arr.push(i);
//   }
//   console.log(arr);
// }

// countdown(5);
function removeFirstTwo(list) {
  const [a, b] = [...list];
  return [a, b];
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);
