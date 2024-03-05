import routes from 'utils/constants/routes';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import ListPage from 'pages/ListPage';
import EditPage from 'pages/EditPage';
import PostPage from 'pages/PostPage';
import ErrorPage from 'pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<LandingPage />}></Route>
      <Route path={routes.list} element={<ListPage />}></Route>
      <Route path={routes.edit} element={<EditPage />}></Route>
      <Route path={routes.post} element={<PostPage />}></Route>
      <Route path={routes.error} element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
