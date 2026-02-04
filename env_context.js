// Import the built-in Operating System module
const os = require('os');

/**
 * Node.js OS Module - Environment Context Example
 * This script retrieves information about the current execution environment.
 */

// 1. Get information about the current logged-in user
// Returns an object containing username, uid, gid, shell, and homedir
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);

// 2. Get the path to the current user's home directory
// Important for locating user-specific config files (like .ssh or .aws)
console.log(`Home Directory: ${os.homedir()}`);

// 3. Get the operating system's default directory for temporary files
// Crucial for DevOps: Always write temp files here to avoid permission issues
console.log(`Temp Directory: ${os.tmpdir()}`);

// 4. Bonus: Get the system hostname
// Useful for identifying which server/node a script is running on
console.log(`Hostname: ${os.hostname()}`);