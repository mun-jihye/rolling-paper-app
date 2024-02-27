import styled from 'styled-components';
import GlobalStyle from 'components/styles/GlobalStyle.jsx';

const Container = styled.div`
  width: 1200px;
  height: 68px;
  gap: 263px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtons = styled.div`
    width: 88px;
    height: 36px;
    padding: 6px 16px 6px 16px;
    border-radius: 6px;
    border: 1px;
    gap: 10px;
`;

const ToUser = styled.div`
  margin-left: 36rem;
  font-family: Pretendard;
  font-size: 26px;
  font-wight: 900;
  line-height: 42px;
  letter-spacing: -0.01px;
  text-align: left;
`;

const AddButton = styled.button`
  width: 88px;
  height: 36px;
  padding: 6px, 16px, 6px, 16px;
  border-radius: 6px;
  border: 1px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #cccccc;
`;

const VerticalLine = styled.div`
  height: 80%;
  width: 1px;
  background-color: #ccc;
`;

const ShareButton = styled.button`
  width: 56px;
  height: 36px;
  padding: 6px, 16px, 6px, 16px;
  border-radius: 6px;
  border: 1px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #cccccc;
`;

//이건 나중에 데이터 가져오기
const userData = {
  name: 'Min3eo',
  emotion: 'Happy',
};

const SubHeader = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Container>
          <ToUser>To. {userData.name}</ToUser>
          <StyledButtons>
            <AddButton>추가</AddButton>
            <VerticalLine />
            <ShareButton>공유</ShareButton>
          </StyledButtons>
        </Container>
      </div>
    </>
  );
};

export default SubHeader;
