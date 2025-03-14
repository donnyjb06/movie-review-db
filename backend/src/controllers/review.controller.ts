import {
  writeAllReviews,
  getAllReviews,
  getReviewIndexById,
} from "../models/review.model.js";
import { Response, Request } from "express";
import { Review } from "types/review";
import { v4 as uuidv4 } from "uuid";
import { validateReview } from "../validations/review.validation.js";

export const getReviews = async (req: Request, res: Response) => {
  try {
    const allReviews = await getAllReviews();
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(404).json({ message: "Reviews not found!" });
  }
};

export const createNewReview = async (req: Request, res: Response) => {
  const { title, starRating, userReview, genre }: Review = req.body;
  const newReview: Review = {
    id: uuidv4(),
    title,
    starRating,
    userReview,
    genre
  }

  try {
    const reviews = await getAllReviews();
    reviews.push(newReview)
    await writeAllReviews(reviews)

    res.status(201).json(newReview)
  } catch (error) {
    res.status(501).json({ error: "Failed to save the review" });
  }
}

export const updateReviewProperty = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const newReviewProperties = req.body;
  const errorMessage = validateReview(newReviewProperties);

  if (errorMessage) {
    res.status(200).json({ error: errorMessage })
  }

  try {
    const reviews = await getAllReviews();
    const indexOfMatchingReview = getReviewIndexById(id, reviews)

    reviews[indexOfMatchingReview] = {
      ...reviews[indexOfMatchingReview],
      ...newReviewProperties
    }

    await writeAllReviews(reviews);
    res.status(200).json(reviews[indexOfMatchingReview])
  } catch (error) {
    res.status(400).json({ error: `Something went wrong when attempting to change review with id of ${id}` })
  }
}
// Delete review with matching id
export const deleteReview = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    let reviews = await getAllReviews();
    const index = getReviewIndexById(id, reviews)
    
    reviews.splice(index, 1);
    await writeAllReviews(reviews);
    res
  } catch (error) {
    res.status(200).json({ error: "Error has occurred while attempting to delete review:" }) 
  }
};