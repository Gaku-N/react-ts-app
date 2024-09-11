import { Routes, Route } from 'react-router-dom';

import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
export const Router = () => {
  return (
    <>
    <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Setting' element={<Setting />}></Route>
        <Route path='/UserManagement' element={<UserManagement />}></Route>
      </Routes>
    </>
  )
};