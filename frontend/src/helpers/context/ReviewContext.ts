import { createContext } from "react";
import { Review } from "../types/review";

interface ReviewsContextType {
  deleteReviewFromCache: (id: string) => void;
  getCachedReviews: () => Review[];
  cacheNewReview: (newReview: Review) => void;
  sortFilteredData: Review[];
  handleSortOrderChange: (event: MouseEvent) => void;
  handleFilterChange: (event: MouseEvent) => void;
}

export const ReviewsContext = createContext<ReviewsContextType | null>(null);

