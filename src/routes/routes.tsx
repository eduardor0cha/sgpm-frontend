import { Route } from "../domain/types";
import { LoginPage } from "../pages";

const routes: Route[] = [
  {
    path: "*",
    title: "404",
    element: <div>404</div>,
    isProtected: false,
    useDefaultLayout: false,
  },
  {
    path: "/",
    title: "Login",
    element: <LoginPage />,
    isProtected: false,
    useDefaultLayout: false,
  },
  {
    path: "/login",
    title: "Login",
    element: <LoginPage />,
    isProtected: false,
    useDefaultLayout: false,
  },
  {
    path: "/calendar",
    title: "Calendário",
    element: <div>Calendar</div>,
    isProtected: true,
    allowedRoles: ["medic"],
    useDefaultLayout: true,
  },
];

export default routes;
