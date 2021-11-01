import React, { useState } from 'react';
import { Logo } from '../../assets/logo';
import { LeftArrowIcon, MenuIcon } from '../../assets/icons';

function Sidebar() {
  const [collapsed, setCollapsed] = useState();
  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  return (
    <div className={collapsed ? `sgpm-c-sidebar--colapsed` : `sgpm-c-sidebar`}>
      <div className="sgpm-c-sidebar__top">
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
    </div>
  );
}

export default Sidebar;
