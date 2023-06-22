import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import BasicTable from './components/BasicTable/BasicTable';
import Container from '@mui/material/Container';
import { EventProvider } from './data/eventContext';
import Home from './components/BasicTable/Home';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  return (
    <EventProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Container maxWidth='xl'>
            <BasicTable />
          </Container>
      </ThemeProvider>
    </EventProvider>
  );
}