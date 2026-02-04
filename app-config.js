// Accessing built-in environment variables
console.log(`Current Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`Machine Name: ${process.env.COMPUTERNAME || process.env.HOSTNAME}`);

// Professional DevOps Tip: Setting a default value if the variable is missing
const port = process.env.PORT || 3000;
console.log(`Server will run on port: ${port}`);