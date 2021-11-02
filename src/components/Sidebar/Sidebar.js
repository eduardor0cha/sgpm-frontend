import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Logo } from '../../assets/logo';
import {
  LeftArrowIcon,
  MenuIcon,
  CalendarIcon,
  CheckIcon,
  PersonIcon,
  PersonAddIcon,
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
          to="/users"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--users`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact={true}
        >
          <PersonIcon />
          <span>Usuários</span>
        </NavLink>
        <NavLink
          to="/registration"
          className={classNames(
            `sgpm-c-sidebar__link`,
            `sgpm-c-sidebar__link--registration`
          )}
          activeClassName="sgpm-c-sidebar__link--active"
          exact={true}
        >
          <PersonAddIcon />
          <span>Cadastro</span>
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
