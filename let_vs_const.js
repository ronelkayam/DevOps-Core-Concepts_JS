console.log("=== Regular variables ===");

// let – value can change
let counter = 1;
console.log("Counter:", counter);

counter = 2;
console.log("Counter after change:", counter);

// let can be declared without value
let status;
status = "running";
console.log("Status:", status);

console.log("\n=== const variables ===");

// const – must have a value and cannot be reassigned
const port = 3000;
console.log("Port:", port);

// port = 4000; // ❌ Error – const cannot be reassigned

console.log("\n=== const with objects and arrays ===");

const service = {
  name: "auth",
  state: "running"
};

console.log("Service:", service);

// allowed – modifying object content
service.state = "stopped";
console.log("Service after update:", service);

// NOT allowed – reassigning const
// service = {}; // ❌ Error

const servers = ["server-1", "server-2"];
console.log("Servers:", servers);

// allowed – modifying array content
servers.push("server-3");
console.log("Servers after push:", servers);

// NOT allowed – reassigning array
// servers = []; // ❌ Error
