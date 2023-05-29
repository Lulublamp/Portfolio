  import React, { useEffect, useState } from 'react';
  import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
  import Navigation from './components/NavBar/NavBar';
  import Mes_travaux from './page/Mes_travaux';
  import Profile from './page/Profile';
  import Feed from './page/Feed';
  import WorkDetail from './components/Works/WorkDetail';
  import EmailCopy from './components/Card/EmailCopy';

  interface NavItem {
    label: string;
    path: string;
    icon?: boolean;
    onClick?: (event : React.MouseEvent) => void;
  }


  interface OverlayProps {
    isTransitioning: boolean;
  }

  const OverlayTransition: React.FC<OverlayProps> = ({ isTransitioning }) => {
    return (
      <div className={`overlay ${isTransitioning ? 'active' : ''}`} />
    );
  };

  const RoutesWrapper: React.FC = () => {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsTransitioning(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsLoading(false);
      }, 500);
    }, [location]);

    return (
      <>
        {!isLoading && (
          <Routes>
            <Route path="/" element={<Mes_travaux />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/works/:workName" element={<WorkDetail />} />
          </Routes>
        )}
        <OverlayTransition isTransitioning={isTransitioning} />
      </>
    );
  };

  const App: React.FC = () => {
    const [isEmailCopyVisible, setIsEmailCopyVisible] = useState(false);
    const [emailCopyPosition, setEmailCopyPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    const handleIconClick = (event : React.MouseEvent) => {
      setEmailCopyPosition({ x: event.clientX + 50, y: event.clientY - 10 });
      setIsEmailCopyVisible(true);
      navigator.clipboard.writeText('lucas.blampied@lucas-blampied.fr');
      setTimeout(() => {
        setIsEmailCopyVisible(false);
      }, 800);
    };

    const navItems: NavItem[] = [
      { label: 'Mes travaux', path: '/' },
      { label: 'A propos', path: '/profile' },
      { label: 'Mon feed', path: '/feed' },
      { label: '', path: '', icon: true, onClick : handleIconClick },
    ];

    return (
      <Router>
        <div className="App">
          <Navigation navItems={navItems} />
          <RoutesWrapper />
          {isEmailCopyVisible && <EmailCopy x={emailCopyPosition.x} y={emailCopyPosition.y}/>}
        </div>
      </Router>
    );
  };

  export default App;
