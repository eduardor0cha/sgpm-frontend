import { ReactNode } from "react";
import { UserRole } from "../Auth/UserRoles";

export type Route = {
  path: string;
  element: JSX.Element;
  title: string;
  icon?: ReactNode;
  isProtected: boolean;
  allowedRoles?: "all" | UserRole[];
  useDefaultLayout: boolean;
  showOnMenu: boolean;
};
