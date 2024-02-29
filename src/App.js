import routes from 'components/utils/constants/routes';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'components/pages/LandingPage';
import ListPage from 'components/pages/ListPage';
import EditPage from 'components/pages/EditPage';
import PostPage from 'components/pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<LandingPage />}></Route>
      <Route path={routes.list} element={<ListPage />}></Route>
      <Route path={routes.edit} element={<EditPage />}></Route>
      <Route path={routes.post} element={<PostPage />}></Route>
    </Routes>
  );
}

export default App;
