import { useNavigate } from "react-router-dom";
import { useUser } from "../feature/account/useUser";
import Loader from "./Loader";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isPending, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/signin");
  }, [isAuthenticated, isPending, navigate]);

  if (isPending) return <Loader />;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
