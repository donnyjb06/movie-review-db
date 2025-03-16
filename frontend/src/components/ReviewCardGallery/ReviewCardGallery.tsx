import React from "react";
import { useReviewsContext } from "../../helpers/hooks/useReviewContext";
import ReviewCard from "../ReviewCard.tsx/ReviewCard";
import "./ReviewCardGallery.scss"

const ReviewCardGallery: React.FunctionComponent = () => {
  const { sortFilteredData } = useReviewsContext();
  console.log("Sorted and Filtered Data:", sortFilteredData)
  return (
    <div className="review-card-gallery">
      {sortFilteredData ? (
        sortFilteredData.map((review) => {
          console.log("Review being rendered:", review)
          return <ReviewCard review={review} />;
        })
      ) : (
        <p className="review-card-gallery">There are no reviews to show!</p>
      )}
    </div>
  );
};

export default ReviewCardGallery;
