// Modern Node.js: fs/promises
import { readFile, writeFile, appendFile } from "fs/promises";

async function main() {
  /*
  ====================================
  READING FILES
  ====================================
  */

  // ✅ Reading an existing file
  try {
    const data = await readFile("example.txt", "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.log("example.txt does not exist");
  }

  // ❌ Reading a non-existing file
  // Uncommenting this will throw an error
  // const missing = await readFile("missing.txt", "utf-8");

  /*
  ====================================
  WRITING FILES
  ====================================
  */

  // ✅ Writing to a file that does NOT exist
  await writeFile("new-file.txt", "Hello World");
  console.log("new-file.txt created");

  // ⚠️ Writing to a file that DOES exist (overwrite)
  await writeFile("new-file.txt", "Overwritten content");
  console.log("new-file.txt overwritten");

  /*
  ====================================
  APPENDING FILES
  ====================================
  */

  // ✅ Appending content (safe)
  await appendFile("new-file.txt", "\nAppended text");
  console.log("Text appended");

  /*
  ====================================
  PATH ERRORS
  ====================================
  */

  // ❌ Writing to a folder that does not exist
  // This will throw an error (ENOENT)
  // await writeFile("logs/app.txt", "Hello");
}

// Run the async main function
main();
