import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const reviewDataFilePath = join(__dirname, "../../data/review-data.json");

export const PORT = 5000;
