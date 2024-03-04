import React from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import { editData } from 'data/editPage';
import { useQuery } from 'react-query';
import { getRecipientList } from 'api/recipient';

// const datas = editData.recentMessages;
const EditPage = () => {
  const { data, error } = useQuery({
    queryKey: ['editPage'],
    queryFn: ({ id = 4080 }) => getRecipientList(id),
  });
  const editData = data?.data.results[0];
  console.log(data);
  console.log(error);

  return (
    <EditContainer
    // $backgroundcolor={editData.backgroundColor}
    // $backgroundimageurl={editData.backgroundImageURL}
    >
      {/* <FromCardList datas={datas} /> */}
    </EditContainer>
  );
};

export default EditPage;
