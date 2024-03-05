import React from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import { useQuery } from 'react-query';
import { getRecipientList, getRecipient } from 'api/recipient';
import Loader from 'components/commons/Loader';

const EditPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['editPage'],
    queryFn: ({ id = 4126 }) => getRecipient(id),
  });
  const { data: message } = useQuery({
    queryKey: ['messageList'],
    queryFn: ({ id = 4126 }) => getRecipientList(id),
  });
  const editData = data?.data;
  const messageData = message?.data.results && [
    { id: 'add' },
    ...message?.data.results,
  ];
  console.log(messageData);
  return (
    <>
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
