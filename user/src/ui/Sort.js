import styled from "styled-components";
import Filter from "./Filter";

const StyledSort = styled.div`
  display: flex;
  gap: 1rem;
`;

const Sort = () => {
  return (
    <StyledSort>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "available", label: "Available" },
          { value: "sold out", label: "SoldOut" },
        ]}
      />
    </StyledSort>
  );
};

export default Sort;
