import React, { useEffect, useState } from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import Loader from 'components/commons/Loader';
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
import GNB from 'components/commons/header/GNB';

const EditPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);
  const { ref, inView } = useInView();

  const { data: recipient, isLoading } = useGetRecipientQuery(postId);
  const deleteRecipient = useDeleteRecipientQuery(postId);
  const {
    fetchNextPage,
    isFetchingNextPage,
    data: messages,
    isError,
  } = useGetMessagesQuery(postId);

  const editData = recipient?.data;
  const messageData = messages?.pages.flatMap(param => param.data.results);

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
    if (inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <>
      <GNB data={editData} />
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
          {isError ? (
            <Error />
          ) : (
            <>
              <FromCardList
                datas={messageData}
                isDelete={isDelete}
                isFetchingNextPage={isFetchingNextPage}
              />
            </>
          )}
          {!isFetchingNextPage && <div ref={ref} />}
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
    bottom: 2.4rem;
    right: auto;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    position: fixed;
    bottom: 2.4rem;
    right: auto;
  }
`;
export default EditPage;
