import Express from "express"
import { getReviews, createNewReview, updateReviewProperty } from "controllers/review.controller"

const reviewRoutes = Express.Router()

reviewRoutes.get("/", getReviews);
reviewRoutes.post("/", createNewReview)
reviewRoutes.patch("/:id", updateReviewProperty)
reviewRoutes.delete("/:id", )

export { reviewRoutes }