// File System module (built-in, no installation needed)
const fs = require("fs");

/*
====================================
READING FILES
====================================
*/

// ✅ Reading an existing file (works if file exists)
try {
  const data = fs.readFileSync("example.txt", "utf-8");
  console.log("File content:", data);
} catch (err) {
  console.log("example.txt does not exist");
}

// ❌ Reading a non-existing file (will throw an error)
// Uncommenting this will crash the program
// fs.readFileSync("missing.txt", "utf-8");

/*
====================================
WRITING FILES
====================================
*/

// ✅ Writing to a file that does NOT exist
// The file will be created automatically
fs.writeFileSync("new-file.txt", "Hello World");
console.log("new-file.txt created");

// ⚠️ Writing to a file that DOES exist
// This will overwrite (delete) previous content
fs.writeFileSync("new-file.txt", "Overwritten content");
console.log("new-file.txt overwritten");

/*
====================================
APPENDING FILES
====================================
*/

// ✅ Appending content (safe)
// If file exists → content is added to the end
// If file does not exist → file is created
fs.appendFileSync("new-file.txt", "\nAppended text");
console.log("Text appended");

/*
====================================
PATH ERRORS
====================================
*/

// ❌ Writing to a folder that does not exist
// This will throw an error (ENOENT)
// fs.writeFileSync("logs/app.txt", "Hello");

/*
====================================
IMPORTANT NOTE
====================================
*/

// Files are created relative to the directory
// from which Node.js is executed (current working directory)
