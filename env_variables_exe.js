// Import the dotenv package to load variables from .env into process.env
require('dotenv').config();

class AppConfig {
    constructor() {
        // 1. Connectivity Settings
        this.port = process.env.PORT || 3000; // Defaulting to 3000 if PORT is missing
        this.host = process.env.HOST;

        // 2. Database Configuration
        this.dbName = process.env.DB_NAME;

        // 3. Credentials & Security (Sensitive Data)
        this.credentials = {
            username: process.env.USER_NAME,
            password: process.env.PASS,
            apiKey: process.env.API_KEY
        };

        // 4. User Information
        this.adminName = process.env.LAST_NAME;
    }

    /**
     * Display a summary of the environment status
     * Note: In real scenarios, never log passwords or secret keys!
     */
    displayStatus() {
        console.log(`--- Server Configuration ---`);
        console.log(`Target Host: ${this.host}`);
        console.log(`Listening on Port: ${this.port}`);
        console.log(`Connected to DB: ${this.dbName}`);
        console.log(`Admin User: ${this.adminName}`);
        console.log(`API Key Loaded: ${this.credentials.apiKey ? 'YES' : 'NO'}`);
    }

    getConnectionString() {
        return `mongodb://${this.host}:${this.port}/${this.dbName}`;
    }
}

// Usage:
const config = new AppConfig();
config.displayStatus();

console.log("\nGenerated Connection String:");
console.log(config.getConnectionString());