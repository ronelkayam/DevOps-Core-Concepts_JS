/**
 * NODE.JS OS MODULE - FULL REFERENCE GUIDE
 * This script demonstrates the most critical functions for DevOps automation.
 */

const os = require('os');

// --- 1. HOST & USER CONTEXT ---
// Identifying WHO and WHERE the script is running.
console.log("=== Host & User Context ===");

// The username of the person/service account executing the script
console.log(`Execution User: ${os.userInfo().username}`);

// The network name of the server (useful for logging in clusters)
console.log(`Hostname:       ${os.hostname()}`);

// The Home and Temp directories (essential for file-path portability)
console.log(`Home Dir:       ${os.homedir()}`);
console.log(`Temp Dir:       ${os.tmpdir()}`);


// --- 2. HARDWARE RESOURCES ---
// Checking CPU and Memory for monitoring or scaling logic.
console.log("\n=== Hardware Resources ===");

// Architecture (x64, arm64, etc.) and Platform (linux, darwin, win32)
console.log(`Platform:     ${os.platform()} (${os.arch()})`);

// Calculate Memory in Gigabytes (Total and Free)
const totalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
const freeGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Memory Usage: ${freeGB}GB free out of ${totalGB}GB`);

// Get CPU count to determine parallel processing limits
console.log(`CPU Cores:    ${os.cpus().length} logical cores`);


// --- 3. SYSTEM PERFORMANCE & UPTIME ---
// Monitoring system health over time.
console.log("\n=== System Performance ===");

// Uptime returns seconds - we convert it to hours for readability
const uptimeHours = (os.uptime() / 3600).toFixed(1);
console.log(`System Uptime: ${uptimeHours} hours`);

// Load Average: [1min, 5min, 15min] - Unix only (Returns 0 on Windows)
const [load1, load5, load15] = os.loadavg();
console.log(`Load Average (1/5/15 min): ${load1.toFixed(2)}, ${load5.toFixed(2)}, ${load15.toFixed(2)}`);


// --- 4. NETWORKING ---
// Finding the server's IP address.
console.log("\n=== Network Interfaces ===");

const interfaces = os.networkInterfaces();
for (const name in interfaces) {
    interfaces[name].forEach((net) => {
        // We usually only care about IPv4 and non-internal (not 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            console.log(`${name}: ${net.address}`);
        }
    });
}