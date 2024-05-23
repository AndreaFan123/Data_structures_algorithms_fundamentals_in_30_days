# Day 1 : RAM

![ram](./Day-1.png)

## Table of Contents

- [What is RAM](#what-is-ram)
- [What compose RAM?](#what-compose-ram)
- [Basic units of storage](#basic-units-of-storage)
- [What Kind of Data is Stored in RAM?](#what-kind-of-data-is-stored-in-ram)
- [Characteristics of an array in JavaScript](#characteristics-of-an-array-in-javascript)

### What is RAM

Ram also known as **Random Access Memory**. It is a type of computer memory that can be accessed randomly.The opposite of RAM is **ROM**, it is **Read Only Memory**.

RAM is volatile memory, it loses data when the power is turned off. The term **Random Access** is crucial when we talk about storage.

### What compose RAM?

- **DRAM:**

  - Dynamic Random Access Memory.
  - Requires periodic refreshing to retain data.
  - Highly storage density and lower cost, making it widely used as the main memory in computers.

- **SRAM:**

  - Static Random Access Memory.
  - Does not require refreshing.
  - Faster and more reliable than DRAM.
  - Used for cache memory.

- **Memory Cell:**

  - Basic storage unit in RAM called bit, also as known as binary digit.
  - A bit has a single binary value, either 0 or 1.

- **Address Decoder:**
  - Each memory cell has a unique address, which allows the CPU or other controllers to randomly access specific memory cells.
  - Used to identify and access specific memory locations, thereby reading or writing data.

### Basic units of storage

In most computer systems, a `byte` is a unit of data that is eight binary digits long. Bytes are often used to represent a character such as a letter, number, or typographic symbol.

![ram](./ram.png)

### What Kind of Data is Stored in RAM?

- Variables
- Functions
- Stack
- Heap

We will not be addressing this for now, but in JavaScript, data types like primitive data types (number, string, boolean…etc), composite data types (object), these are stores in RAM in order to quick access and modify.

![array-ram](./array-ram.png)

Ok, let's move forward to the important part of the series - ** arrays**.

When we declare an array, like we mentioned above, it will be stored in RAM, let's say `[1, 2, 3, 4, 5]`, in JavaScript, each number is represented as **64 bit**, which is **8 byte**.

Do you know how many bytes these variables occupy in memory?

```js
let num = 23; // 8 byte
let arr = [1, 2, 3, 4, 5, 6]; // 8 byte * 6 = 48 byte
```

Values stored in RAM are contiguous, but not necessarily at consecutive addresses. In short, we won't always be able to allocate their positions in memory continuously. Remember that I mentioned the term 'Random Access' is crucial; here is why.

---

### Characteristics of an array in JavaScript

- Dynamic
  - We already know that when we declare an array, it will be stored in RAM, and it is **dynamic (size (length) can be adjusted dynamically)**, unlike low-level languages like `C` or `C++`, they need to be defined how long an array should be before using it.
- Duplicated

  - Arrays can store duplicate values, e.g., `[1, 1, 2, 3, 4]`.

- Mixed Types
  - Arrays can store mixed types of values, e.g., `[1, 'hello', true, 3.14]`.

Whether you define an array using JavaScript or other languages, just remember that array is easy to read via index (if we know the index of a specific value), but because of the random address, it is hard to write or delete.

With characteristics mentioned above, once the array keeps growing, it increase the intensity of all CRUD actions, try to imagine if we have an array with 1000 elements, if we want tp perform CRUD actions, here are the steps:

- Read:
  - We know the index, so we can access the value directly. e.g., `arr[0]`.
  - If we don't know the index, we need to loop through the array to find the value.
  - No matter how long the array is, the time we need to read the value is always the same, which is **O(1)**, which is constant time.

Because values of an array are contiguous in memory, if we try to update, delete or insert a value, we need to move element to keep its contiguous,this sort of operations increase the time complexity, which is **O(n)**, which is linear time.

```js
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
```
