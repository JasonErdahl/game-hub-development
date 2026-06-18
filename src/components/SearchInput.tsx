import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          const searchText = ref.current.value;
          if (searchText) {
            navigate(`/?search=${searchText}`);
          } else {
            navigate("/");
          }
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
          key={searchParams.get("search")} // This forces the input to update when the search param changes
          defaultValue={searchParams.get("search") || ""}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
