import { Review } from "../types/Review";

const requestReviews = async () => {
  try {
    const response = await fetch("/reviews", {
      method: "GET", 
    })

    if (response.ok) {
      return await response.json();
    } else {
      console.error("failed to fetch reviews:", response.statusText)
    }
  } catch (error) {
    console.error("Error fetching reviews:", error)

  }
  return []
}