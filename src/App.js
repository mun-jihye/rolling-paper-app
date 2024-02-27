import routes from 'components/utils/constants/routes';
import { Routes, Route } from 'react-router-dom';
import ButtonPage from 'components/pages/ButtonPage';
import FormPage from 'components/pages/FormPage';
import Header from 'components/pages/Header';
import ModalPage from 'components/pages/ModalPage';
import CardListPage from 'components/pages/CardLIstPage';

function App() {
  return (
    <Routes>
      <Route path={routes.button} element={<ButtonPage />}></Route>
      <Route path={routes.form} element={<FormPage />}></Route>
      <Route path={routes.header} element={<Header />}></Route>
      <Route path={routes.cardList} element={<CardListPage />}></Route>
      <Route path={routes.modal} element={<ModalPage />}></Route>
    </Routes>
  );
}

export default App;
