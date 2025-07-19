import { useSearchParams } from "react-router-dom";
import { Button } from "./Button";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  const optionValue = options.map((option) => (
    <Button
      onClick={() => handleClick(option.value)}
      key={option.value}
      active={currentFilter === option.value}
      disabled={option.value === currentFilter}
      variation={currentFilter === option.value ? "primary" : "secondary"}
      size="small"
    >
      {option.label}
    </Button>
  ));

  return optionValue;
};

export default Filter;
