type Props = {
  title: string;
  className?: string;
};

function Header({ title, className }: Props) {
  return <nav className={`sgpm-c-header ${className}`}>{title}</nav>;
}

export default Header;
