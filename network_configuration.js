// One of the most common tasks in DevOps 
// is identifying the host's IP address for networking, service discovery, or security auditing.

const os = require('os');

// Get all network interfaces available on this machine
const network = os.networkInterfaces();

console.log('--- Non-Internal IPv4 Addresses ---');

Object.keys(network).forEach((interfaceName) => {
    network[interfaceName].forEach((details) => {
        // Filter for IPv4 and skip 'internal' (127.0.0.1)
        if (details.family === 'IPv4' && !details.internal) {
            console.log(`Interface: ${interfaceName} | IP: ${details.address}`);
        }
    });
});