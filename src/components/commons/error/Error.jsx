import React from 'react';
import styled from 'styled-components';

const Error = () => {
  return (
    <Main>
      <ErrorBox>
        <Text>
          <EmogiText>❌</EmogiText> 저장된 데이터가 없습니다.
        </Text>
      </ErrorBox>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffeaea;
  width: 80vw;
  height: 5rem;
  border: 0.1rem solid red;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #ad000039;
`;

const Text = styled.div`
  display: flex;
  color: red;
  font-size: 1.5rem;
`;

const EmogiText = styled(Text)`
  margin: 0 1rem;
`;

export default Error;
