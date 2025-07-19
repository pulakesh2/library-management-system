import styled from "styled-components";
import { Headings } from "./Headings";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { useLogOut } from "../feature/Authentication/useLogOut";
import { useUser } from "../feature/account/useUser";

const HeaderStyled = styled.nav`
  font-size: var(--font-size-2xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-light-bg-secondary);
  grid-row: 1/2;
  grid-column: 1/-1;
  padding: 1rem 4rem !important;
`;

const Account = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-size: var(--font-size-xl);
`;

const Img = styled.img`
  height: 3rem;
  width: auto;
  border-radius: 100px;
`;

const Header = () => {
  const { mutate: logout } = useLogOut();
  const { user } = useUser();

  return (
    <HeaderStyled>
      <Headings as="h1">Library Management System</Headings>
      <Account>
        <Link to="/account">
          <span>{user?.user_metadata.full_name}</span>
        </Link>
        <Img src={user?.user_metadata.avatar} alt="avatar" />
        <Button variation="secondary" size="medium">
          <HiArrowLeftEndOnRectangle onClick={logout} />
        </Button>
      </Account>
    </HeaderStyled>
  );
};

export default Header;
