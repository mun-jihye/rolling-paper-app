import React from 'react';
import { EditContainer } from 'components/edit/EditContainer';
import FromCardList from 'components/edit/FromCardList';
import { editData } from 'data/editPage';

const datas = editData.recentMessages;
const EditPage = () => {
  return (
    <EditContainer
      backgroundColor={editData.backgroundColor}
      backgroundImageURL={editData.backgroundImageURL}
    >
      <FromCardList datas={datas} />
    </EditContainer>
  );
};

export default EditPage;
