import 'dotenv/config.js';
import './server.js';
import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });


console.log(`ENV FILE: ${process.env.ENV_FILE || 'NOT FOUND'}`)
console.log(`PORT: ${process.env.PORT || 'NOT FOUND'}`)
