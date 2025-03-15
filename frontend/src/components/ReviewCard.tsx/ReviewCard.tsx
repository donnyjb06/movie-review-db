import React from "react";
import { Review } from "../../helpers/types/review";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import Star from "../Star/Star";
import "./ReviewCard.scss";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FunctionComponent<ReviewCardProps> = ({ review }) => {
  const { id, title, genre, userRating, userReview } = review;
  return (
    <div className="review-card" data-id={id}>
      <div className="review-card__header">
        <p className="review-card__title">{title}</p>
        <LiaGripLinesVerticalSolid
          color="var(--secondary-text-clr)"
          size={20}
        />
        <span className="review-card__genre">{genre}</span>
      </div>

      <div className="review-card__ratings">
        <div className="review-card__star-rating">
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <Star
                starValue={number}
                selectedStarValue={userRating}
                size="1.5rem"
              />
            );
          })}
        </div>
        <span className="review-card__number-rating">
          <span className="user-review__number-rating 
                           user-review__number-rating--accent">
            {userRating}
          </span>
          /5
        </span>
      </div>

      <p className="review-card__user-review">{userReview}</p>
    </div>
  );
};

export default ReviewCard;
