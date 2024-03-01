import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';

const GNB = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const { pathname } = location;

  const isMobile = windowWidth < 768;
  const isPostOrEditPage = pathname === '/' || pathname === '/edit';

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowMainHeader =
    !isMobile ||
    (isMobile &&
      !isPostOrEditPage &&
      (pathname === '/' || pathname === '/list'));
  const shouldShowMainHeaderButton = pathname === '/' || pathname === '/list';
  const shouldShowSubHeader = isPostOrEditPage && isMobile;

  return (
    <>
      {shouldShowMainHeader && (
        <MainHeader showButton={shouldShowMainHeaderButton} />
      )}
      {shouldShowSubHeader && <SubHeader />}
    </>
  );
};

export default GNB;
