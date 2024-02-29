import { useLocation } from 'react-router-dom';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';

//수정 필요: 모바일 화면
const GNB = () => {
  const location = useLocation();
  const { pathname } = location;

  const NotShowSubHeader = !(
    pathname === '/' ||
    pathname === '/list' ||
    pathname.match(/^\/post\/\d+\/message$/)
  );

  return (
    <>
      <MainHeader />
      {NotShowSubHeader && <SubHeader />}
    </>
  );
};

export default GNB;
