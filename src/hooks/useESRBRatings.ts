import ESRBRating from "../entities/ESRBRating";

// ESRB ratings are part of game details, not a separate API endpoint
// These are standard ratings used for filtering
const esrbRatings: ESRBRating[] = [
  { id: 1, name: "Everyone", slug: "everyone" },
  { id: 2, name: "Everyone 10+", slug: "everyone-10-plus" },
  { id: 3, name: "Teen", slug: "teen" },
  { id: 4, name: "Mature", slug: "mature" },
  { id: 5, name: "Adults Only", slug: "adults-only" },
  { id: 6, name: "Rating Pending", slug: "rating-pending" },
];

const useESRBRatings = () => {
  return {
    data: { results: esrbRatings },
    error: null,
    isLoading: false,
  };
};

export default useESRBRatings;
