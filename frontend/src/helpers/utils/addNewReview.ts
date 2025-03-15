import { ReviewFormData } from "../types/ReviewFormData";

export const addNewReview = async (
  abortController: AbortController,
  data: ReviewFormData
) => {
  try {
    const response = await fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: abortController.signal,
    });

    if (response.ok) {
      return response.json();
    } else {
      console.error("Form submission failed:", response);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
