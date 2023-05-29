import React from 'react';
import './Card.css';

interface CardProps {
  icon: React.FC,
  label: string,
  target?: string,
  href: string
}

const Card: React.FC<CardProps> = ({ icon: Icon, label, href, target}) => {
  return (
    <a className="cards" href={href} target={target}>
      <div></div>
      <Icon />
      <span>{label}</span>
    </a>
  );
}

export default Card;
