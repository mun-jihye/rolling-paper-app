import { useLocation } from 'react-router-dom';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';
import useDeviceType from 'hooks/useDeviceType';

/*
메인헤더: 윗줄의 헤더, 서브헤더는 아랫줄의 헤더
메인헤더 버튼: 롤링페이퍼 만들기 버튼

PC
메인헤더: 모든 페이지에 표시됨 (소개, 리스트, 포스트, 에딧, 메세지)
메인헤더 버튼: '소개', '리스트' 페이지에서만 표시됨
서브헤더: 모든 페이지에서 표시되지 않음

태블릿
메인헤더: 모든 페이지에 표시됨 (소개, 리스트, 포스트, 에딧, 메세지)
메인헤더 버튼: '소개', '리스트' 페이지에서만 표시됨
서브헤더: '포스트', '에딧' 페이지에서만 표시됨

모바일
메인헤더: '소개', '리스트' 페이지에서만 표시됨
메인헤더 버튼: '소개', '리스트' 페이지에서만 표시됨
서브헤더: '포스트', '에딧' 페이지에서만 표시됨
*/

const GNB = () => {
  const location = useLocation();
  const { pathname } = location;

  const deviceType = useDeviceType();
  const isPostOrEditPage = pathname === '/post' || pathname === '/edit';

  const isMobile = deviceType === 'Mobile';

  const shouldShowMainHeader =
    deviceType !== 'Mobile' ||
    (isMobile &&
      !isPostOrEditPage &&
      (pathname === '/' || pathname === '/list'));
  const shouldShowMainHeaderButton = pathname === '/' || pathname === '/list';
  const shouldShowSubHeader = isPostOrEditPage && isMobile;

  console.log('Should show main header button:', shouldShowMainHeaderButton);
  console.log('Should show main header:', shouldShowMainHeader);
  console.log('Device type:', deviceType);

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
