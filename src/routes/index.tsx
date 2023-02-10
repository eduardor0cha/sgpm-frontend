import { Routes } from "react-router-dom";
import { buildRoute } from "../utils/RouteUtils";
import routes from "./routes";

function AppRoutes() {
  return <Routes>{routes.map((route, i) => buildRoute(route, i))}</Routes>;
}

export default AppRoutes;
