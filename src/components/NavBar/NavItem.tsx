import React from 'react';
import { useNavigate } from 'react-router-dom';
import SvgIcon from './MessageIconSvg';

interface Props {
  label: string;
  path: string;
  icon?: boolean;
  onClick?: (event : React.MouseEvent) => void;
}

const NavItem: React.FC<Props> = ({ label, path, icon, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if(onClick) {
      onClick(event);
      return;
    }
    navigate(path);
  };

  return (
    <a href={path} onClick={handleClick}>
      {icon && <SvgIcon />}
      {label} 
    </a>
  );
};

export default NavItem;
