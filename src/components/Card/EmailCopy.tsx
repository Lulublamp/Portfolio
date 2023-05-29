import React from "react";
import "./EmailCopy.css";

interface Props {
  x: number;
  y: number;
}

const EmailCopy: React.FC<Props> = ({ x, y }) => {
  const style: React.CSSProperties = {
    position: 'fixed',
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <div className="EmailCopycard" style={style}>
      <span>Email copied !</span>
    </div>
  );
}

export default EmailCopy;
