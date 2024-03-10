import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '나눔손글씨 손편지체'; 
    src: url('/fonts/나눔손글씨 손편지체.ttf') format('truetype'); 
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', "Noto Sans KR","Nanum Myeongjo","나눔손글씨 손편지체", sans-serif;
  }
  html,
  body {
    /* 62.5% => 10rem, 1rem = 10px */
    font-size: 62.5% !important;
    line-height: 1.285;
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    border: 0;
  }
`;
export default GlobalStyle;
