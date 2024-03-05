import React, { useState } from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import { useQuery } from 'react-query';
import { getRecipientList, getRecipient } from 'api/recipient';
import Loader from 'components/commons/Loader';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';
import { useParams } from 'react-router-dom';
import Button from 'components/commons/buttons/Button';
import styled from 'styled-components';

const EditPage = () => {
  const { postId } = useParams();
  const [isEdit, setIsEdit] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: ['editPage', postId],
    queryFn: context => getRecipient(context.queryKey[1]),
  });
  const { data: message } = useQuery({
    queryKey: ['messageList', postId],
    queryFn: context => getRecipientList(context.queryKey[1]),
  });

  const editData = data?.data;
  const messageData = message?.data.results && [
    { id: 'add' },
    ...message?.data.results,
  ];
  return (
    <>
      <MainHeader />
      <SubHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <EditContainer
          $backgroundcolor={editData.backgroundColor}
          $backgroundimageurl={editData.backgroundImageURL}
        >
          <FlexContainer>
            {isEdit ? (
              <StyledButton>편집하기</StyledButton>
            ) : (
              <StyledButton>삭제하기</StyledButton>
            )}
          </FlexContainer>
          <FromCardList datas={messageData} />
        </EditContainer>
      )}
    </>
  );
};
const FlexContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;
`;
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: 0;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    position: fixed;
    bottom: 0;
    right: auto;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    position: fixed;
    bottom: 0;
    right: auto;
  }
`;
export default EditPage;
