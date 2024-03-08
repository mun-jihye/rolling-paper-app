import routes from 'utils/constants/routes';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ListPage from 'pages/ListPage';
import EditPage from 'pages/EditPage';
import PostPage from 'pages/PostPage';
import ErrorPage from 'pages/ErrorPage';
import MessagePage from 'pages/MessagePage';
import PapersPage from 'pages/PapersPage';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<LandingPage />}></Route>
      <Route path={routes.list} element={<ListPage />}></Route>
      <Route path={`${routes.papers}/:sort`} element={<PapersPage />}></Route>
      <Route path={`${routes.post}/:postId`} element={<EditPage />}></Route>
      <Route
        path={`${routes.post}/:postId/message`}
        element={<MessagePage />}
      ></Route>
      <Route path={routes.post} element={<PostPage />}></Route>
      <Route path={routes.error} element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
