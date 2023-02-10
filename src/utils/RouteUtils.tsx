import { Route } from "react-router-dom";
import { Layout, ProtectedRoute } from "../components";
import { Route as RouteType } from "../domain/types";

export function buildRoute(
  {
    path,
    element,
    title,
    isProtected,
    allowedRoles,
    useDefaultLayout,
  }: RouteType,
  key?: number
) {
  const getElement = () => {
    if (isProtected && allowedRoles) {
      return (
        <ProtectedRoute
          element={
            useDefaultLayout ? (
              <Layout title={title}>{element}</Layout>
            ) : (
              element
            )
          }
          allowedRoles={allowedRoles}
        />
      );
    } else {
      return useDefaultLayout ? (
        <Layout title={title}>{element}</Layout>
      ) : (
        element
      );
    }
  };

  return <Route path={path} element={getElement()} key={key} />;
}
