// In a containerized world (Docker/K8s), knowing how many CPU cores you have is vital for performance tuning.
// DevOps Use Case: Determining the number of Worker Processes 
// for a Node.js Cluster or deciding how many parallel threads a build script should use.
const os = require('os');
const cores = os.cpus();

console.log(`CPU Model: ${cores[0].model}`);
console.log(`Total CPU Cores: ${cores.length}`);

// Calculate total speed of all cores
const totalSpeed = cores.reduce((acc, core) => acc + core.speed, 0);
console.log(`Combined CPU Speed: ${totalSpeed} MHz`);