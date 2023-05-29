import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';

interface Props {
  navItems: { label: string, path: string, icon?: boolean, onClick? : (event : React.MouseEvent) => void }[];
}

const NavBar: React.FC<Props> = ({ navItems }) => {
  return (
    <nav>
      <div>
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} path={item.path} icon={item.icon} onClick={item.icon ? item.onClick : undefined} />
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
