import { extendTheme, StylesProvider } from '@chakra-ui/react';
import styled from '@emotion/styled/types/base';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});
export default theme;
