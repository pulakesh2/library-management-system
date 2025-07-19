import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSideBar = styled.ul`
  list-style: none;
  font-size: var(--font-size-2xl);
  background-color: var(--color-light-bg-secondary);
  height: 87dvh;
  margin: 0;
  padding: 1rem;
`;

const StyledLink = styled(NavLink)`
  margin-bottom: 1rem;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    text-decoration: none;

    color: var(--color-light-text-primary);
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem 2rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #000;
    background-color: var(--color-light-bg-active);
    border-radius: 9px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

const sidebarData = [
  { to: "books", label: "Books" },
  { to: "request", label: "Request" },
  { to: "message", label: "Message" },
];

const SidebarAdmin = () => {
  return (
    <StyledSideBar>
      {sidebarData.map((item) => (
        <StyledLink key={item.to} to={item.to}>
          {item.label}
        </StyledLink>
      ))}
    </StyledSideBar>
  );
};

export default SidebarAdmin;
