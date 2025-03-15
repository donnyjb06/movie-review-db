import { createContext, MouseEvent as ReactMouseEvent } from "react";
import { Review } from "../types/review";

interface ReviewsContextType {
  deleteReviewFromCache: (id: string) => void;
  getCachedReviews: () => Review[];
  cacheNewReview: (newReview: Review) => void;
  sortFilteredData: Review[];
  handleSortOrderChange: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
  handleFilterChange: (event?: ReactMouseEvent<HTMLButtonElement>) => void;
}

export const ReviewsContext = createContext<ReviewsContextType | null>(null);
