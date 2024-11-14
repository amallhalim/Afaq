// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you store authentication status in Redux

const ProtectedRoute = ({ children }) => {
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const isAuthenticated = true;
  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
