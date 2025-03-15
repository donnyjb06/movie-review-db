import { useContext } from "react";
import { ReviewsContext } from "../context/ReviewContext";

export const useReviewsContext = () => {
  const context = useContext(ReviewsContext);

  if (!context) {
    console.error("useReviewsContext must be used within a ReviewsProvider component")
    throw new Error("useReviewsContext must be used within a ReviewsProvider component")
  }

  return context;
}