/*
  === JSON in JavaScript – Full Demo ===

  Key concepts:
  1. JS Object → JSON String (JSON.stringify)
     - Converts a JS object into a JSON-formatted string.
     - Useful for saving data or sending it to APIs/files.
  
  2. JSON String → JS Object (JSON.parse)
     - Converts a JSON string back into a JavaScript object.
     - Useful when receiving data from APIs or reading files.
*/


console.log("=== JS Object → JSON String ===");
const user = { name: "Alice", age: 30 };
const jsonStr = JSON.stringify(user);  // Object → JSON string
console.log("JavaScript object:", user);
console.log("Converted to JSON string:", jsonStr);
console.log("\n");

console.log("=== JSON String → JS Object ===");
const receivedJson = '{"name":"Alice","age":30}';
const parsedUser = JSON.parse(receivedJson); // JSON string → Object
console.log("JSON string received:", receivedJson);
console.log("Parsed back to JS object:", parsedUser);
console.log("\n");

console.log("=== JSON Array Example ===");
const usersArray = [
  { name: "Bob", age: 25 },
  { name: "Carol", age: 28 }
];
const usersJsonStr = JSON.stringify(usersArray); // Array of objects → JSON string
console.log("Array of JS objects:", usersArray);
console.log("Converted to JSON string:", usersJsonStr);

const parsedUsersArray = JSON.parse(usersJsonStr); // JSON string → Array of objects
console.log("Parsed back to JS array of objects:");
parsedUsersArray.forEach(u => console.log(u.name, "-", u.age));
console.log("\n");

console.log("=== Nested JSON Example ===");
const nestedObj = {
  project: "DevOps Demo",
  tasks: [
    { title: "Setup CI/CD", done: true },
    { title: "Deploy App", done: false }
  ]
};
const nestedJsonStr = JSON.stringify(nestedObj);
console.log("Nested JS object:", nestedObj);
console.log("Converted to JSON string:", nestedJsonStr);

const parsedNestedObj = JSON.parse(nestedJsonStr);
console.log("Parsed back to nested JS object:", parsedNestedObj);
