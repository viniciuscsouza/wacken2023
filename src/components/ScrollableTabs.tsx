import * as React from 'react';
import { TabContext } from '../data/tabContext';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScrollableTabs({children}: any) {
  const { tabValue, handleTabChange } = React.useContext(TabContext)!;

  const handleChange  = (event: React.SyntheticEvent, newValue: number) => {
    handleTabChange(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs 
        value={tabValue} 
        onChange={handleChange} 
        textColor="inherit"
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        >
          <Tab label="Segunda-feira" />
          <Tab label="Terça-feira" />
          <Tab label="Quarta-feira" />
          <Tab label="Quinta-feira" />
          <Tab label="Sexta-feira" />
          <Tab label="Sábado" />
      </Tabs>
      {children}
    </Box>
  );
}