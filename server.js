
import {app} from './app.js';
import 'dotenv/config.js';
import './server.js';
import dotenv from "dotenv";

const envFile = process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenv.config({ path: envFile });

console.log(`ENV FILE: ${process.env.ENV_FILE || 'NOT FOUND'}`)
console.log(`PORT: ${process.env.PORT || 'NOT FOUND'}`)
const PORT = process.env.PORT || 4000;

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

