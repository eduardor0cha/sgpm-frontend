import { ReactNode } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="sgpm-c-layout">
      <header className="sgpm-c-layout__header">
        <Header />
      </header>
      <nav className="sgpm-c-layout__sidebar">
        <Sidebar />
      </nav>
      <main className="sgpm-c-layout__main">{children}</main>
    </div>
  );
}

export default Layout;
