import { Route } from "../domain/types";
import { LoginPage, NotFound } from "../pages";

const routes: Route[] = [
  {
    path: "*",
    title: "404",
    element: <NotFound />,
    isProtected: false,
    useDefaultLayout: false,
    showOnMenu: false,
  },
  {
    path: "/",
    title: "Login",
    element: <LoginPage />,
    isProtected: false,
    useDefaultLayout: false,
    showOnMenu: false,
  },
  {
    path: "/login",
    title: "Login",
    element: <LoginPage />,
    isProtected: false,
    useDefaultLayout: false,
    showOnMenu: false,
  },
  {
    path: "/calendar",
    title: "Calendário",
    element: <div>Calendar</div>,
    isProtected: true,
    allowedRoles: ["medic"],
    useDefaultLayout: true,
    showOnMenu: true,
  },
  {
    path: "/profile",
    title: "Perfil",
    element: <div>Perfil</div>,
    isProtected: true,
    allowedRoles: "all",
    useDefaultLayout: true,
    showOnMenu: false,
  },
];

export default routes;
