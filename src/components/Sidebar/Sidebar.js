import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from '../../assets/logo';
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

function Sidebar() {
  const [collapsed, setCollapsed] = useState();
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
          className="sgpm-c-sidebar__toggle-button"
          onClick={toggleCollapsed}
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
            exact={true}
          >
            <img src={GenericProfile} />
            <span>Fulano de tal</span>
          </NavLink>
        </div>
        <NavLink
          to="/calendar"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--calendar`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
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
          exact={true}
        >
          <HelpIcon />
          <span>Ajuda</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
