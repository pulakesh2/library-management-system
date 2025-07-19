import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 1fr auto;
`;

const AppLayout = () => {
  console.log("hellko");
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Outlet />
    </StyledAppLayout>
  );
};

export default AppLayout;
