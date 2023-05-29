import React, { useEffect, useRef } from 'react';
import './Header.css';

interface HeaderProps {
  title: string[];
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let lastMouseX = mouseX;
    let x = 0;
    let skew = 0;
    const friction = 0.05;
    const spring = 0.01;
    const skewFactor = 0.5;

    function lerp(start: number, end: number, t: number) {
      return start * (1 - t) + end * t;
    }

    let headerWidth = 0;
    if (headerRef.current) {
      headerWidth = headerRef.current.getBoundingClientRect().width;
    }

    function animate() {
      x = lerp(x, mouseX, friction);
      skew = lerp(skew, (x - lastMouseX) / -skewFactor, spring);
      if (Math.abs(skew) > 20) skew = 20;
      if (headerRef.current) {
        headerRef.current.style.transform = `translate3d(${x * (headerWidth - window.innerWidth) / window.innerWidth}px, 0, 0) skewX(${skew}deg)`;
      }
      lastMouseX = x;
      requestAnimationFrame(animate);
    }

    animate();
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <h1 className="super-header" ref={headerRef}>
      <div className="ticker__inner">
        {title.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            {index < title.length - 1 && <span>-</span>}
          </React.Fragment>
        ))}
      </div>
    </h1>
  );
};

export default Header;
