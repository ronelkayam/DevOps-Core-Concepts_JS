console.log("=== JavaScript Objects and Collections ===\n");

// ===== 1. Regular Object (like a dictionary/hash) =====
// Regular Object (user)
// Works like a dictionary or hash.
// Key-value pairs can be accessed with obj.key or obj["key"].
console.log("1. Regular Object (dictionary/hash):");

const user = {
  name: "Alice",
  age: 30,
  role: "DevOps"
};

// Access values
console.log("Name:", user.name);    // Alice
console.log("Age:", user["age"]);   // 30

// Add a new key
user.country = "Israel";
console.log("Updated user:", user);

// Check if key exists
console.log("Has 'role'?", "role" in user); // true

console.log("\n");


// ===== 2. Array =====
// Array (numbers)
// Ordered collection of items.
// Access by index, loop with forEach, add with push.
console.log("2. Array:");

const numbers = [10, 20, 30, 40, 50];

// Access by index
console.log("First number:", numbers[0]); // 10

// Loop through array
console.log("All numbers:");
numbers.forEach(num => console.log(num));

// Add an element
numbers.push(60);
console.log("Updated array:", numbers);

console.log("\n");


// ===== 3. Map =====
// Map (mapExample)
// Similar to objects but allows any type of key (not just strings).
// Useful when keys are dynamic or not strings.

console.log("3. Map:");

const mapExample = new Map();

// Set key-value pairs
mapExample.set("key1", "value1");
mapExample.set("key2", "value2");

// Get value
console.log("key1:", mapExample.get("key1")); // value1

// Check if key exists
console.log("Has key2?", mapExample.has("key2")); // true

// Iterate over map
console.log("All key-value pairs:");
mapExample.forEach((value, key) => console.log(key, "=>", value));

console.log("\n");

// ===== 4. Array of Objects =====

// Array of Objects (users)
// Combines arrays and objects.
// Common pattern in DevOps and JS for representing structured data (like JSON).

console.log("4. Array of Objects:");

const users = [
  { name: "Bob", age: 25 },
  { name: "Carol", age: 28 }
];

// Loop through array of objects
users.forEach(u => console.log(u.name, "-", u.age));

console.log("\n=== End of Collections Demo ===");

/*
  === Collections in JavaScript ===

  1. Object (Dictionary / Hash)
     - Stores key-value pairs.
     - Keys are usually strings.
     - Useful for structured data.
     - Example: const user = { name: "Alice", age: 30 };

  2. Array
     - Ordered list of items.
     - Access items by index (numbers starting from 0).
     - Useful for lists of similar elements.
     - Example: const numbers = [10, 20, 30];

  3. Map
     - Stores key-value pairs like objects, but keys can be any type (not just strings).
     - Maintains the order of insertion.
     - Useful for dynamic or complex keys.
     - Example: const mapExample = new Map();
  
  4. Array of Objects
     - Combines arrays and objects.
     - Useful for collections of structured data (like JSON arrays).
     - Example: const users = [{name: "Bob", age: 25}, {name: "Carol", age: 28}];

  Summary:
  - Use Object for simple dictionaries.
  - Use Array for ordered lists.
  - Use Map when keys are complex or not strings.
  - Use Array of Objects to represent multiple structured items.
*/
