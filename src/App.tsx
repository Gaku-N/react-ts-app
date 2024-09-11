import { Button, ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Router } from './router/Router';



function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
