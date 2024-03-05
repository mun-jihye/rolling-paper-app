import styled from 'styled-components';
import React from 'react';
import FromCard from './FromCard';
import { formatDate } from 'utils/date';
import AddCard from './AddCard';

const FromCardList = ({ datas }) => {
  return (
    <GridContainer>
      {datas?.map(data => {
        const {
          id,
          sender,
          profileImageURL,
          relationship,
          content,
          createdAt,
        } = data;

        const formattedDate = formatDate(createdAt);
        return id === 'add' ? (
          <AddCard key={id} />
        ) : (
          <FromCard
            key={id}
            profileImageURL={profileImageURL}
            sender={sender}
            relationship={relationship}
            content={content}
            formattedDate={formattedDate}
          />
        );
      })}
    </GridContainer>
  );
};
const GridContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default FromCardList;
