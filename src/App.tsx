import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { Router } from './router/Router';
import theme from './theme/Theme';
import { HeaderLayout } from './components/template/HeaderLayout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout>
          <Router></Router>
        </HeaderLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
