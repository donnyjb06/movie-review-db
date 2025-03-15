import { ReviewsContext } from "../context/ReviewContext";
import { useCachedReviews } from "../hooks/useCachedReviews";
import { useFilterSort } from "../hooks/useFilterSort";
import { requestReviews } from "../utils/requestReviews";
import { FC, ReactNode } from "react";

interface ReviewProviderProps {
  children: ReactNode;
}

const ReviewProvider: FC<ReviewProviderProps> = ({ children }) => {
  const [getCachedReviews, cacheNewReview, deleteReviewFromCache, cachedReviews] =
    useCachedReviews(requestReviews);
  const { sortFilteredData, handleFilterChange, handleSortOrderChange } =
    useFilterSort(cachedReviews);

  return (
    <ReviewsContext.Provider
      value={{
        getCachedReviews,
        cacheNewReview,
        deleteReviewFromCache,
        sortFilteredData,
        handleFilterChange,
        handleSortOrderChange,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export default ReviewProvider