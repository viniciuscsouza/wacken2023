import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BasicTable from './components/BasicTable/BasicTable';
import Container from '@mui/material/Container';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Container maxWidth='xl'>
          <BasicTable />
        </Container>
    </ThemeProvider>
  );
}