import React, { ReactNode, createContext, useState } from 'react'

interface TabContextProps {
  tabValue: number;
  handleTabChange: (newValue: number) => void;
}

interface TabProviderProps {
  children: ReactNode;
}

export const TabContext = createContext<TabContextProps | undefined>(undefined)

export const TabProvider = ({ children }: TabProviderProps) => {
  const [tabValue, setTabValue] = useState(0)

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <TabContext.Provider value={{ tabValue, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};