import React, { useEffect, useState } from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import Loader from 'components/commons/Loader';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'components/commons/buttons/Button';
import styled from 'styled-components';
import {
  useDeleteRecipientQuery,
  useGetMessagesQuery,
  useGetRecipientQuery,
} from 'hooks/queries/useEditQuery';
import { deleteAlert } from 'utils/deleteAlert';
import routes from 'utils/constants/routes';
import { useInView } from 'react-intersection-observer';
import Error from 'components/commons/error/Error';
const EditPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const [offset, setOffset] = useState(0);

  const { data: recipient, isLoading } = useGetRecipientQuery(postId);
  const deleteRecipient = useDeleteRecipientQuery(postId);
  const {
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    data: messages,
    isError,
  } = useGetMessagesQuery(postId, offset);
  console.log(messages?.pages[0].data.results);
  const { ref, inView } = useInView();

  const editData = recipient?.data;
  const messageData = messages?.pages[0].data.results;

  const handleDelete = () => {
    deleteAlert({
      title: '롤링페이퍼 대상을 삭제하시겠습니까?',
      deleteMutaion: deleteRecipient,
      Id: postId,
      onSuccess: () => {
        navigate(routes.list);
      },
    });
  };
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      setOffset(prevOffset => prevOffset + 3);
      fetchNextPage();
    }
  }, [inView]);

  if (isError) {
    return <Error />;
  }
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
            {isDelete ? (
              <StyledButton onClick={handleDelete}>삭제하기</StyledButton>
            ) : (
              <StyledButton onClick={() => setIsDelete(!isDelete)}>
                편집하기
              </StyledButton>
            )}
          </FlexContainer>
          <FromCardList datas={messageData} isDelete={isDelete} />
          {isFetchingNextPage ? <Loader /> : <div ref={ref} />}
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
