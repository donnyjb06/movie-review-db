import React from "react";
import { Review } from "../types/review";

export const useCachedReviews = (requestReviews: () => Promise<Review[]>) => {
  const [cachedReviews, setCachedReviews] = React.useState<Review[]>([]);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await requestReviews();
        if (reviews && reviews.length > 0) {
          setCachedReviews(reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [requestReviews]);

  React.useEffect(() => {
    updateSessionStorage();
  }, [cachedReviews]);

  const updateSessionStorage = () => {
    window.sessionStorage.setItem("reviews", JSON.stringify(cachedReviews));
  };

  const getCachedReviews = () => {
    const reviewsInStorage = window.sessionStorage.getItem("reviews");
    return reviewsInStorage
      ? (JSON.parse(reviewsInStorage) as Review[])
      : ([] as Review[]);
  };

  const cacheNewReview = (newReview: Review) => {
    setCachedReviews((prevCachedReviews) => [...prevCachedReviews, newReview]);
  };

  const deleteReviewFromCache = (id: string) => {
    const index = cachedReviews.findIndex((review) => review.id === id);

    const newCachedReviews = cachedReviews.splice(index, 1);
    setCachedReviews(newCachedReviews);
  };

  return [
    getCachedReviews,
    cacheNewReview,
    deleteReviewFromCache,
    cachedReviews,
  ] as const;
};
