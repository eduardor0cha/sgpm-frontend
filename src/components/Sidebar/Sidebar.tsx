import { useState } from "react";
import { MdKeyboardArrowLeft, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import LogoWhiteLine from "../../assets/logo/LogoWhiteLine";
import { useAuth } from "../../contexts";
import routes from "../../routes/routes";

type Props = {
  className?: string;
};

function Sidebar({ className }: Props) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { loggedUser } = useAuth();

  const getItems = () => {
    return routes.map((route, i) => {
      if (
        route.showOnMenu &&
        (!route.isProtected ||
          route.allowedRoles === "all" ||
          route.allowedRoles?.includes(loggedUser!.role))
      ) {
        return (
          <NavLink to={route.path} className="sgpm-c-sidebar__item" key={i}>
            {route.icon}
            <span>{route.title}</span>
          </NavLink>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div
      className={`sgpm-c-sidebar ${className} ${
        isCollapsed ? "collapsed" : null
      }`}
    >
      <div className="sgpm-c-sidebar__header">
        <LogoWhiteLine className="sgpm-c-sidebar__logo" />
        {isCollapsed ? (
          <MdKeyboardArrowLeft
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="sgpm-c-sidebar__toggle-button"
          />
        ) : (
          <MdMenu
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="sgpm-c-sidebar__toggle-button"
          />
        )}
      </div>
      <div className="sgpm-c-sidebar__items">{getItems()}</div>
    </div>
  );
}

export default Sidebar;
