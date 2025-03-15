export const requestReviews = async () => {
  try {
    const response = await fetch("http://localhost:5000/review", {
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