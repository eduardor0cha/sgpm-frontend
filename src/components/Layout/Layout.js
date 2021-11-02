import React from 'react';
import { Sidebar } from '../Sidebar';

function Layout(props) {
  return (
    <div className="sgpm-c-layout">
      <nav className="sgpm-c-layout__sidebar">
        <Sidebar />
      </nav>
      <main className="sgpm-c-layout__main">{props.children}</main>
    </div>
  );
}

export default Layout;
