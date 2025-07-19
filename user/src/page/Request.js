import styled from "styled-components";
import RequestBook from "../feature/request/RequestBook";

const StyledRequest = styled.div`
  margin: 1rem 2rem;
`;

const Request = () => {
  return (
    <StyledRequest>
      <RequestBook />
    </StyledRequest>
  );
};

export default Request;
