import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const __dirname = dirname(pathToFileURL(import.meta.url).toString());
export const reviewDataFilePath = join(__dirname, "../data/review-data.json");

export const PORT = 5000;