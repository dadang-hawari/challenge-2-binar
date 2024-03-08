const arr = [2, "11", 3, "a2", false, 5, 7, 1, NaN];
const arrDua = [2, 3, 0, 5, 7, 8, true, false];

// foreach
console.log("\n---dengan foreach---");
const sumNumbers = (value) => {
  let sum = 0;
  if (Array.isArray(value)) {
    value.forEach((e) => {
      if (e && typeof e === "number") {
        sum += e;
      }
    });
    return sum;
  }
  return "harus array";
};

console.log(sumNumbers(string));

console.log(`Original array: ${arr}`);
console.log(`Sum all numbers: ${sumNumbers(arr)}`);
console.log(`Original array: ${arrDua}`);
console.log(`Sum all numbers: ${sumNumbers(arrDua)}`);

// filter & reduce;
console.log("\n---dengan filter & reduce---");
const sumNumbersFilterReduce = (arr) =>
  arr.filter((e) => typeof e === "number" && e).reduce((sum, e) => sum + e, 0);

console.log(`Original array: ${arr}`);
console.log(`Sum all numbers: ${sumNumbersFilterReduce(arr)}`);
console.log(`Original array: ${arrDua}`);
console.log(`Sum all numbers: ${sumNumbersFilterReduce(arrDua)}`);
