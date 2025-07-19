import styled from "styled-components";
import MessageAdmin from "../feature/message/MessageAdmin";

const StyledMessage = styled.div`
  margin: 1rem 2rem;
`;

const Message = () => {
  return (
    <StyledMessage>
      <MessageAdmin />
    </StyledMessage>
  );
};

export default Message;
