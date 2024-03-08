## 💜 롤링 페이퍼 웹사이트 만들기 💜

<br>
<img src = "public\images\ReadMeRolling.png">
<br><br>
프로젝트 개발 기간: 2024.02.26 - 2024.03.11

## 📚목차

- 배포주소
- 프로젝트에 대한 소개
- 사용한 기술 스택
- 주요 기능
- 서비스 구성
- 팀 소개

## 💾 배포 주소

https://naver.com
<br><br>

## 🎀프로젝트에 대한 소개

추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼인 '롤링'이라는 웹앱 서비스입니다.

코드잇 프론트 엔드 4기에서 진행이 된 첫 프로젝트로, 주어진 피그마 디자인에 맞추어서 웹 개발을 진행 하였습니다. 팀 개발을 하며 사용자의 입장을 중요시 하게 생각하여 필요하다고 생각되는 기능을 추가하여 개발을 진행 하였습니다.

<br><br>

## 🏝 사용한 기술 스택

|                                                                                                       tools                                                                                                        |                                                                                                                                                                                                                                                                                  FlatForms & Language                                                                                                                                                                                                                                                                                   |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"><br /><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> | <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><br /> <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"><br /><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react router&logoColor=white"> |

</div><br>

## 📲 주요 기능

- 롤링 페이퍼 게시 기능: 사용자는 자신의 롤링 페이퍼를 원하는 폰트와 배경을 선택하여 생성하고 웹에 게시할 수 있습니다.

- 롤링 페이퍼 수정 기능: 사용자는 자신의 롤링 페이퍼를 삭제 또는 수정 할 수 있습니다.

- 롤링 페이퍼 확인 기능: 롤링 페이퍼들을 한 페이지에서 쉽게 확인 할 수 있습니다. 무한 스크롤을 적용하였습니다

- 이모지 반응 기능: 사용자는 다른 사용자들의 롤링 페이퍼에 이모지로 반응을 표시할 수 있습니다.

- 소셜 공유 기능: 카카오톡과 URL을 통해 롤링 페이퍼를 쉽게 공유할 수 있습니다.

<br><br>

## 전반적인 서비스 구성

### 랜딩 페이지 (주소: /)

- 페이지 상세 기능: 바로 접속하게 되면 보이는 메인 페이지입니다.
  전반석인 서비스에 대한 설명이 되어있고 구경 해보기 버튼을 누르게 되면 /list 페이지로 이동합니다.

  <img src = "public\images\ReadMeMain.png" width="500">

### 리스트 페이지 (주소: /list)

- 주요 기능: 특정 사람에게 몇 명이 적었고, 어떤 이모지를 사용했는지 확인할 수 있습니다. 전반적인 롤링 페이퍼 리스트들을 확인 할 수 있습니다.
- 전체 보기 버튼을 눌러 인기 롤링 페이퍼, 최근에 만든 롤링 페이퍼 각각을 자세하게 볼 수 있습니다. 아래의 에딧 페이지와 같이 무한 스크롤이 구현 되어있습니다.
  <br><br>
  <img src = "public\images\ReadMeList.png" width="500">
  <br><br>

### 에딧 페이지 (주소: /post/{id})

- 주요 기능: 특정 사람의 롤링페이퍼를 볼수 있습니다. 각 리스트를 누르면 모달 창이 뜨며, 전문을 확인 할 수 있습니다.
- 무한 스크롤이 구현 되어있습니다.
  <br><br>
  <img src = "public\images\ReadMeEdit.png" height="265">
  <img src = "public\images\ReadMeScroll.gif" height="265">

### 포스트 페이지 (주소: /post)

- 주요 기능: 보내고 싶은 사람의 입력을 입력하고 배경과 폰트를 사용자가 선택해서 게시할 수 있습니다.<br><br>
  <img src = "public\images\ReadMePost.png" width="500">

### 기타 기능: 헤더

- 메인헤더와 서브헤더로 나누었습니다. 로고와 롤링 페이퍼 만들기 버튼을 이용할 수 있습니다. 누구에게 몇 명이 보냈는지 간략하게 알 수 있습니다. 자신이 추가하고 싶은 이모지를 선택하여 추가 할 수 있고, 공유 버튼으로 카카오톡 공유나, URL을 복사할 수 있습니다.

  <img src = "public\images\ReadMeMainHeader.png" width="500" height="20px">
  <img src = "public\images\ReadMeSubHeader.png" width="500" height="20px">

### 기타 기능: Sweet Alert

- 사용자가 페이퍼를 삭제 할 때 정말 삭제하고 싶은지 한 번 더 묻는 기능입니다. Sweet Alert를 이용하여 구현 하였습니다.
  <img src = "public\images\ReadMeAlert2.png"  width="500" height="320">

<br>

## 🌍 INSTALLING

Instaling

- axios, emoji-picker, react-dom, react query
- react-responsive, styled-components, sweetalert 등

<br><br>

## 🌍 팀 소개

|                                      FE                                      |                                      FE                                      |                                      FE                                       |
| :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|        [문지혜(팀장)](https://github.com/mun-jihye/rolling-paper-app)        |                     [박유빈](https://github.com/yb3143)                      |                      [권민서](https://github.com/min3eo)                      |
| <img src="https://avatars.githubusercontent.com/u/87179769?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/96522163?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/110177217?v=4" width="200"> |

|                                      FE                                       |                                      FE                                       |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                    [김창민](https://github.com/jinwooseok)                    |                   [진찬용](https://github.com/Jin-Chanyong)                   |
| <img src="https://avatars.githubusercontent.com/u/101163507?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/155409604?v=4" width="200"> |
