import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";
import { UserRole } from "../../domain/types";
import { NotFound } from "../../pages";

type ProtectedRouteProps = {
  allowedRoles: "all" | UserRole[];
  element: JSX.Element;
};

function ProtectedRoute({ allowedRoles, element }: ProtectedRouteProps) {
  const { loggedUser } = useAuthContext();

  if (loggedUser === undefined) return null;
  if (!loggedUser) return <Navigate to="/login" />;
  if (allowedRoles !== "all" && !allowedRoles.includes(loggedUser.role))
    return <NotFound />;

  return element;
}

export default ProtectedRoute;
