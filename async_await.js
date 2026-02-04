import { readFile, writeFile } from "fs/promises";

async function main() {
  console.log("Start");

  // מחכה לקובץ להיקרא
  const data = await readFile("example.txt", "utf-8");
  console.log("File content:", data);

  // מחכה לכתוב לקובץ
  await writeFile("new-file.txt", "Hello World");
  console.log("File written");

  console.log("End");
}

main();
// Import the 'readFile' and 'writeFile' functions from the fs/promises module
// These functions return Promises, so we can use async/await with them
import { readFile, writeFile } from "fs/promises";

// Define an async function to run our file operations
async function main() {
  console.log("Start");

  // 1️⃣ Read the contents of 'example.txt' asynchronously
  // 'utf-8' ensures we get a string instead of a Buffer
  const data = await readFile("example.txt", "utf-8");
  console.log("File content:", data);

  // 2️⃣ Write "Hello World" to a new file 'new-file.txt' asynchronously
  // If the file doesn't exist, it will be created
  await writeFile("new-file.txt", "Hello World");
  console.log("File written");

  console.log("End");
}

// 3️⃣ Call the async function to execute the code
main();
