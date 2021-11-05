import React from 'react';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

function Layout(props) {
  return (
    <div className="sgpm-c-layout">
      <header className="sgpm-c-layout__header">
        <Header />
      </header>
      <nav className="sgpm-c-layout__sidebar">
        <Sidebar />
      </nav>
      <main className="sgpm-c-layout__main">{props.children}</main>
    </div>
  );
}

export default Layout;
