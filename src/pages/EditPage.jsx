import React from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import { useQuery } from 'react-query';
import { getRecipientList, getRecipient } from 'api/recipient';
import Loader from 'components/commons/Loader';
import MainHeader from 'components/commons/header/MainHeader';
import SubHeader from 'components/commons/header/SubHeader';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { postId } = useParams();
  console.log(postId);
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
          <FromCardList datas={messageData} />
        </EditContainer>
      )}
    </>
  );
};

export default EditPage;
