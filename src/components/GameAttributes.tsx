import { SimpleGrid, Text, Link } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      {game.parent_platforms && (
        <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
        </DefinitionItem>
      )}
      {game.metacritic && (
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      )}
      {game.genres && (
        <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
        </DefinitionItem>
      )}
      {game.publishers && (
        <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
        </DefinitionItem>
      )}
      {game.esrb_rating && (
        <DefinitionItem term="ESRB Rating">
          <Text>{game.esrb_rating?.name}</Text>
        </DefinitionItem>
      )}
      {game.website && (
        <DefinitionItem term="Website">
          <Link href={game.website} target="_blank" isExternal>
            {game.website}
          </Link>
        </DefinitionItem>
      )}
      {game.reddit_url && (
        <DefinitionItem term="Reddit">
          <Link href={game.reddit_url} target="_blank" isExternal>
            {game.reddit_url}
          </Link>
        </DefinitionItem>
      )}
    </SimpleGrid>
  );
};

export default GameAttributes;
