import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { EventProvider } from './data/eventContext';
import Home from './pages/Home';
import { TabProvider } from './data/tabContext';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function App() {
  return (
    <EventProvider>
      <TabProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <Container maxWidth='xl'>
              <Home />
            </Container>
        </ThemeProvider>
      </TabProvider>
    </EventProvider>
  );
}