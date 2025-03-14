export const deleteReview = async (id: string, abortController: AbortController) => {
  try {
    const response = await fetch(`/review/${id}`, {
      method: "DELETE",
      signal: abortController.signal,
    })
    if (response.ok) {
      console.log(`Review ${id} has been successfully deleted!`)
      return await response.json();
    } else {
      console.error("Could not delete review:", response.statusText);
    }
  } catch (error) {
    console.error("An erro has occured:", error);
  }
}