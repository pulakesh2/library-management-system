import styled from "styled-components";
import { Headings } from "../../ui/Headings";
import { useUser } from "../account/useUser";
import { useMessage } from "./useMessage";
import Loader from "../../ui/Loader";

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  & p {
    margin-top: 0.5rem;
  }
`;

const MessageAdmin = () => {
  const {
    user: {
      user_metadata: { full_name },
    },
  } = useUser();

  const { data: messages, isPending } = useMessage(full_name);

  if (isPending) return <Loader />;

  return (
    <div>
      <Headings as="h2">Admin Message</Headings>

      {messages.length ? (
        messages.map((message, index) => (
          <Message key={index}>
            <Headings as="h3">Admin</Headings>
            <p>{message.message}</p>
          </Message>
        ))
      ) : (
        <Headings as="h3">No message by admin</Headings>
      )}
    </div>
  );
};

export default MessageAdmin;
