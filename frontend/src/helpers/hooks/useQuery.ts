import React from "react";
import { Review } from "../types/review";
import { FetchFunction } from "../types/fetchfunction";
import { ReviewFormData } from "../types/ReviewFormData";

export const useQuery = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const abortControllerRef = React.useRef<AbortController | null>(null);

  const fetchResponse = async (
    fetchFunction: FetchFunction,
    data?: ReviewFormData,
    id?: string,
    partialReview?: Partial<Review>
  ) => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();
    setIsLoading(true);

    try {
      const response = await fetchFunction(
        abortControllerRef.current,
        data as ReviewFormData,
        id,
        partialReview
      );
      return response;
    } catch (error) {
      console.error(`An error has occured:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, fetchResponse] as const;
};
