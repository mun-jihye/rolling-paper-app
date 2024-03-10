import React from 'react';
import { CardContainer } from './CardContainer';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'utils/constants/routes';

const NullCard = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const handleClick = () => {
    navigate(`${routes.post}/${postId}/message`);
  };
  return (
    <StyledNull>
      <Text>
        <Warn>휑...😅</Warn>
        메세지가 존재하지 않습니다. <br />
        메세지를 생성해주세요!
        <Link onClick={handleClick}>메세지 생성하러 가기 👉</Link>
      </Text>
    </StyledNull>
  );
};
const StyledNull = styled(CardContainer)`
  cursor: auto;
  &:hover {
    transform: none;
  }
`;
const Text = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.gray500};
  text-align: center;
`;
const Warn = styled.div`
  font-size: 2.5rem;
`;
const Link = styled.a`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.blue500};
  text-decoration: underline;
`;
export default NullCard;
