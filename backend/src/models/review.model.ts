import { reviewDataFilePath } from "../config/config.js";
import { readFile, writeFile } from "node:fs/promises";
import { Review } from "../types/review";

export const getAllReviews = async (): Promise<Review[]> => {
  try {
    const reviews = await readFile(reviewDataFilePath, "utf-8");
    return JSON.parse(reviews);
  } catch (error) {
    console.error("Error has occured while attempting to read file:", error);
    throw error;
  }
};

export const getReviewIndexById = (id: string, reviews: Review[]) => {
    const index: number = reviews.findIndex( review => review.id === id)

    if (index === -1) {
      console.error(`Review with id of ${id} cannot be found in our database`);
      throw Error(`Review with id of ${id} cannot be found in our database`);
    }

    return index;
}

export const writeAllReviews = async (reviews: Review[]): Promise<void> => {
  try {
    await writeFile(reviewDataFilePath, JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error("Error has occured while attempting to read file:", error);
    throw error;
  }
};




