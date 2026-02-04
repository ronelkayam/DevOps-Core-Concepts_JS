const os = require('os');

// זיכרון פנוי מול זיכרון כולל (ב-GB)
const totalMem = (os.totalmem() / Math.pow(1024, 3)).toFixed(2);
const freeMem = (os.freemem() / Math.pow(1024, 3)).toFixed(2);

console.log(`System Memory: ${freeMem}GB free out of ${totalMem}GB`);

// מידע על מעבדים
console.log(`Architecture: ${os.arch()}`);
console.log(`Number of Cores: ${os.cpus().length}`);