import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles'

const Context = createContext();

export const StateContext = ({ children }) => {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  return (
    <Context.Provider
      value={{
        theme,
        drawerWidth
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);