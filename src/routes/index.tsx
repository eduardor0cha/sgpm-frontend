import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import { UserRole } from "../domain/types";
import { LoginPage } from "../pages";

type ProtectedRouteProps = {
  allowedRoles: "all" | UserRole[];
  element: JSX.Element;
};

function ProtectedRoute({ allowedRoles, element }: ProtectedRouteProps) {
  const { loggedUser } = useAuthContext();

  if (loggedUser === undefined) return null;
  if (!loggedUser) return <Navigate to="/login" />;
  if (allowedRoles !== "all" && !allowedRoles.includes(loggedUser.role))
    return <div>404</div>;

  return element;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/calendar"
        element={
          <ProtectedRoute allowedRoles={"all"} element={<div>Calendar</div>} />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
