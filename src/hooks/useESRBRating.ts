import useESRBRatings from "./useESRBRatings";

const useESRBRating = (id?: number) => {
  const { data: esrbRatings } = useESRBRatings();
  return esrbRatings?.results.find((rating) => rating.id === id);
};

export default useESRBRating;
