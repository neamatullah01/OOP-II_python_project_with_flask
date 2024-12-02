import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
