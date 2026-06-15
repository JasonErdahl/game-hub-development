import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../entities/GameQuery";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // staleTime: 24 * 60 * 60 * 1000, // 24 hours
    staleTime: ms("24h"), // 24 hours
  });

export default useGames;
