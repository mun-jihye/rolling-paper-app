import { CardContainer } from './CardContainer';
import Profile from 'components/commons/Profile';
import FromTitle from 'components/commons/cards/FromTitle';
import CardMessage from 'components/commons/cards/CardMessage';
import Date from 'components/commons/cards/Date';
import styled from 'styled-components';

const FromCard = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
}) => {
  return (
    <CardContainer>
      <Header>
        <FlexContainer>
          <Profile src={profileImageURL} isModal={true} />
          <FromTitle sender={sender} relationship={relationship} />
        </FlexContainer>
      </Header>
      <Hr />
      <Content>
        <CardMessage message={content} isModal={false} />
        <Date date={formattedDate} />
      </Content>
    </CardContainer>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.gray200};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 13.6rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    height: 9.6rem;
  }
`;
export default FromCard;
