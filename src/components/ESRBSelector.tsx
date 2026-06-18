import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useESRBRatings from "../hooks/useESRBRatings";
import useESRBRating from "../hooks/useESRBRating";
import ESRBRating from "../entities/ESRBRating";

interface Props {
  onSelectESRBRating: (rating: ESRBRating) => void;
  selectedESRBRatingId?: number;
}

const ESRBSelector = ({ onSelectESRBRating, selectedESRBRatingId }: Props) => {
  const { data, error } = useESRBRatings();
  const selectedRating = useESRBRating(selectedESRBRatingId);
  
  if (error) return null;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedRating?.name || "ESRB Rating"}
      </MenuButton>
      <MenuList>
        {data?.results.map((rating) => (
          <MenuItem
            key={rating.id}
            onClick={() => onSelectESRBRating(rating)}
          >
            {rating.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ESRBSelector;
