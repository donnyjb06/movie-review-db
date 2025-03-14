import { Review } from "./review";
import { ReviewFormData } from "./ReviewFormData";

export type FetchFunction = (
  abortController: AbortController,
  data: ReviewFormData,
  id?: string,
  partialReview?: Partial<Review>
) => Promise<any>;
