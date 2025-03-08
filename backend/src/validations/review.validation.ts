import { Review } from "types/review";

export const validateReview = (review: Partial<Review>): null | string => {
  if (review.title !== undefined && typeof review.title !== "string") {
    return "Title property must be a string."
  }

  if (review.starRating !== undefined && typeof review.starRating !== "number") {
    return "Star rating must be a number between 1 and 5."
  }

  if (review.userReview !== undefined && typeof review.userReview !== "string") {
    return "User review must be a string.";
  }

  if (review.genre !== undefined && typeof review.genre !== "string") {
    return "Movie genre must be a string."
  }
  return null;
};
