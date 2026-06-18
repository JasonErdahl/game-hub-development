import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { useSearchParams } from "react-router-dom";
import { GameQuery } from "../entities/GameQuery";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const gameQuery: GameQuery = {
    genreId: searchParams.get("genre") ? parseInt(searchParams.get("genre")!) : undefined,
    platformId: searchParams.get("platform") ? parseInt(searchParams.get("platform")!) : undefined,
    sortOrder: searchParams.get("sort") || "",
    searchText: searchParams.get("search") || "",
  };

  const updateSearchParams = (key: string, value: string | number | undefined) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === undefined || value === "") {
      newParams.delete(key);
    } else {
      newParams.set(key, value.toString());
    }
    setSearchParams(newParams);
  };

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => updateSearchParams("genre", genre.id)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5} flexWrap="wrap" gap={2}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) => updateSearchParams("platform", platform.id)}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => updateSearchParams("sort", sortOrder)}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
