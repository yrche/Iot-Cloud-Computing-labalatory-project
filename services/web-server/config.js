import { fileURLToPath } from 'node:url';
import * as path from "node:path";
import dotenv from "dotenv";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const filePath = path.join(__dirname, '.env')
dotenv.config({path: filePath})

export default process.env