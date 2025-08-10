function removeDuplicate(array) {
  //   const unique = [];
  //   for (const friend of array) {
  //     if (unique.includes(friend) === false) {
  //       unique.push(friend);
  //     }
  //   }
  //   return unique;
  const findUniqueFriend = [...new Set(array)];
  return findUniqueFriend;
}

const friends = [
  "Amit",
  "Nabila",
  "Sajid",
  "Riya",
  "Amit",
  "Karim",
  "Nabila",
  "Tania",
  "Sajid",
  "Fahim",
];
const result = removeDuplicate(friends);
console.log(result);
