// The loadavg method mimics the standard Linux uptime command, showing the system load over time.
// DevOps Use Case: Writing a "Safety Script" that prevents heavy cron jobs from starting if the server load is already too high.

// Returns an array: [1 min, 5 min, 15 min] load averages
const [load1, load5, load15] = os.loadavg();

console.log(`Current System Load (1 min): ${load1.toFixed(2)}`);

if (load1 > os.cpus().length) {
    console.warn('WARNING: System is overloaded (Load > CPU count)');
}