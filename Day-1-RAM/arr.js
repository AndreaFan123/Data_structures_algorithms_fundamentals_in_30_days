const arr = ["John", "Alice", "David", "Luke"];

// Get all values
for (const ele of arr) {
  console.log("Value in arr:", ele);
}

// Allows to duplicate value
arr.push("Luke");

console.log("Array in JS allows duplicated value", arr); //Array in JS allows duplicated value [ 'John', 'Alice', 'David', 'Luke', 'Luke' ]

// Read value using index
const aliceIndx = arr.findIndex((el) => el === "Alice");

console.log("Alice is at index of:", aliceIndx); // Alice is at index of: 1

// Updating David to Dave
const davidIndex = arr.findIndex((el) => el === "David");
arr[davidIndex] = "Dave";
console.log("Updated array:", arr);

// Deleting ALice
const aliceIndex = arr.findIndex((el) => el === "Alice");
arr.splice(aliceIndex, 1);
console.log("Deleted Alice:", arr);

// Adding Frank at the end
arr.push("Frank");
console.log("Added Frank:", arr);

// Adding Anna at the beginning
arr.unshift("Anna");

console.log("Added Anna at the beginning:", arr);

// Removing the last element
arr.pop();
console.log("Removed the last element:", arr);

// Removing the first element
arr.shift();
console.log("Removed the first element:", arr);
