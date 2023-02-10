import { PropsWithChildren } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

type Props = {
  title: string;
};

function Layout({ title, children }: Props & PropsWithChildren) {
  return (
    <div className="sgpm-c-layout">
      <Sidebar className="sgpm-c-layout__sidebar" />
      <Header title={title} className="sgpm-c-layout__header" />
      <main className="sgpm-c-layout__main">{children}</main>
    </div>
  );
}

export default Layout;
