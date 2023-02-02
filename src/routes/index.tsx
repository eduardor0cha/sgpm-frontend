import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/calendar" element={<div>Calendar</div>} />
    </Routes>
  );
}

export default AppRoutes;
