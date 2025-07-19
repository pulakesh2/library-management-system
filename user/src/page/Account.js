import styled from "styled-components";
import StudentAccount from "../feature/account/StudentAccount";

const StyledAccount = styled.div`
  padding: 3rem;
`;

const Account = () => {
  return (
    <StyledAccount>
      <StudentAccount />
    </StyledAccount>
  );
};

export default Account;
