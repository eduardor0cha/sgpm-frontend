import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';

import {
  LeftArrowIcon,
  MenuIcon,
  CalendarIcon,
  CheckIcon,
  ChangeIcon,
  ChatIcon,
  NotificationIcon,
  SettingsIcon,
  HelpIcon
} from '../../assets/icons';
import GenericProfile from '../../assets/img/generic-profile.jpg';
import Logo from '../../assets/logo';
import { Context } from '../../Context/AuthContext';

function Sidebar() {
  const { userData } = useContext(Context);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={collapsed ? `sgpm-c-sidebar--colapsed` : `sgpm-c-sidebar`}>
      <div className="sgpm-c-sidebar__header">
        <div className="sgpm-c-sidebar__logo">
          <Logo />
        </div>
        <div
          role="button"
          aria-hidden="true"
          className="sgpm-c-sidebar__toggle-button"
          onClick={toggleCollapsed}
          onKeyDown={toggleCollapsed}
        >
          {collapsed ? <LeftArrowIcon /> : <MenuIcon />}
        </div>
      </div>
      <div className="sgpm-c-sidebar__content">
        <div className="sgpm-c-sidebar__link-profile-container">
          <NavLink
            to="/profile"
            className={classNames(
              `sgpm-c-sidebar__link`,
              `sgpm-c-sidebar__link--profile`
            )}
            activeClassName="sgpm-c-sidebar__link--active"
            exact
          >
            <img alt="profile" src={GenericProfile} />
            <span>{userData?.firstName}</span>
          </NavLink>
        </div>
        <NavLink
          to="/calendar"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--calendar`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <CalendarIcon />
          <span>Calendário</span>
        </NavLink>
        <NavLink
          to="/presence"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--presence`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <CheckIcon />
          <span>Presença</span>
        </NavLink>
        <NavLink
          to="/swap"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--swap`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <ChangeIcon />
          <span>Solicitar troca</span>
        </NavLink>
        <NavLink
          to="/chat"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--chat`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <ChatIcon />
          <span>Chat</span>
        </NavLink>
        <NavLink
          to="/notifications"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--notifications`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <NotificationIcon />
          <span>Notificações</span>
        </NavLink>
      </div>
      <div className="sgpm-c-sidebar__footer">
        <NavLink
          to="/settings"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--settings`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <SettingsIcon />
          <span>Configurações</span>
        </NavLink>
        <NavLink
          to="/help"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--help`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact
        >
          <HelpIcon />
          <span>Ajuda</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
