import Toast from 'components/commons/toast/Toast';
import React, { useState } from 'react';

const EditPage = () => {
  const [toast, setToast] = useState(true);
  return (
    <>
      {toast && (
        <Toast
          margin="2rem"
          setIsAlert={setToast}
          toast={toast}
          positionLeft={'2rem'}
        >
          게시글이 등록되었습니다.
        </Toast>
      )}
    </>
  );
};

export default EditPage;
