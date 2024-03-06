import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';
import useDeviceType from 'hooks/useDeviceType';

const GNB = () => {
  const location = useLocation();
  const { pathname } = location;

  const deviceType = useDeviceType();
  const isEditPage = /^\/post\/\d+$/.test(pathname);
  const isPostPage = pathname === '/post';

  const isMobile = deviceType === 'Mobile';
  const isTabletOrPC = deviceType === 'Tablet' || deviceType === 'PC';
  const shouldShowMainHeader =
    isTabletOrPC || (isMobile && (isEditPage || !isPostPage));

  const shouldShowMainHeaderButton = pathname === '/' || pathname === '/list';
  const shouldShowSubHeader = isEditPage || (isMobile && isEditPage);

  return (
    <>
      <StickyContainer>
        {shouldShowMainHeader && (
          <MainHeader showButton={shouldShowMainHeaderButton} />
        )}
        {shouldShowSubHeader && <SubHeader />}
      </StickyContainer>
    </>
  );
};

export default GNB;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 150;
  background-color: ${({ theme }) => theme.white};
`;
