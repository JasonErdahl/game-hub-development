import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results.length) return null;

  return (
    <Box marginY={5}>
      {data.results.length > 1 && (
        <Heading as="h3" fontSize="lg" marginBottom={3}>
          Trailers
        </Heading>
      )}
      <SimpleGrid columns={{ base: 1, md: data.results.length > 1 ? 1 : 1 }} spacing={3}>
        {data.results.map((trailer) => (
          <Box key={trailer.id}>
            <video
              src={trailer.data[480]}
              poster={trailer.preview}
              controls
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameTrailer;
