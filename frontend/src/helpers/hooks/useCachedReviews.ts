import React from "react";
import { Review } from "../types/review";

export const useCachedReviews = (requestReviews: () => Review[]) => {
  const [cachedReviews, setCachedReviews] = React.useState<Review[]>(() => requestReviews())

  React.useEffect(() => {
    updateSessionStorage()
  }, [cachedReviews])

  const updateSessionStorage = () => {
    window.sessionStorage.setItem("reviews", JSON.stringify(cachedReviews))
  }

  const getCachedReviews = () => {
    const reviewsInStorage = window.sessionStorage.getItem("reviews");
    return reviewsInStorage ? JSON.parse(reviewsInStorage) : [];
  }

  const cacheNewReview = (newReview: Review) => {
    setCachedReviews( prevCachedReviews => (
      [
        ...prevCachedReviews,
        newReview
      ]
    ))
  }


  const deleteReviewFromCache = (id: string) => {
    const index = cachedReviews.findIndex( review => review.id === id);

    const newCachedReviews = cachedReviews.splice(index, 1)
    setCachedReviews(newCachedReviews);
  }

  return [getCachedReviews, cacheNewReview, deleteReviewFromCache] as const;
}

