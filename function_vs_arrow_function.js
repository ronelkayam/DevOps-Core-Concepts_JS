// This defines a named function called isOk.
// It takes one parameter: status.
// It returns true if status is exactly 200, otherwise it returns false.

console.log("=== Regular function ===");

function isOk(status) {
  return status === 200;
}

console.log("Status 200:", isOk(200)); // true
console.log("Status 500:", isOk(500)); // false

// This defines an arrow function and assigns it to a constant isOkArrow.
// Arrow functions are shorter syntax for writing functions.
// Since there is only one parameter and a single expression, you can omit parentheses around the parameter and the return keyword.
// The arrow function automatically returns the result of status === 200.

console.log("\n=== Arrow function ===");

const isOkArrow = status => status === 200;

console.log("Status 200:", isOkArrow(200)); // true
console.log("Status 500:", isOkArrow(500)); // false
