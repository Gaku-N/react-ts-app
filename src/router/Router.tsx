import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { Page404 } from '../components/pages/Page404';
import { Header } from '../components/organisms/Header';
export const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/Login'
          element={<Login />}
        ></Route>
        <Route
          path='/Setting'
          element={<Setting />}
        ></Route>
        <Route
          path='/UserManagement'
          element={<UserManagement />}
        ></Route>
        <Route
          path='*'
          element={<Page404 />}
        ></Route>
      </Routes>
    </>
  );
};
