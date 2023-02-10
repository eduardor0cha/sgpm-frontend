type Props = {
  className?: string;
};

function Sidebar({ className }: Props) {
  return <div className={`sgpm-c-sidebar ${className}`}>Sidebar</div>;
}

export default Sidebar;
