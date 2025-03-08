

export interface Review {
  id?: string;
  title: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  userReview: string;
  genre: string;
}