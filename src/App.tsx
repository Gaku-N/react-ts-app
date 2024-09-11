import { Button, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Setting } from './components/pages/Setting';
import { UserManagement } from './components/pages/UserManagement';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Setting' element={<Setting />}></Route>
        <Route path='/UserManagement' element={<UserManagement />}></Route>
      </Routes>
      {/* <Home /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
