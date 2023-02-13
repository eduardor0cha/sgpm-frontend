import { AccountMenu } from "../AccountMenu";

type Props = {
  title: string;
  className?: string;
};

function Header({ title, className }: Props) {
  return (
    <nav className={`sgpm-c-header ${className}`}>
      <h1>{title}</h1>
      <AccountMenu />
    </nav>
  );
}

export default Header;
