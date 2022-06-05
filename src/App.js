import React from 'react'
import { useStateContext } from './context/StateContext'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Navbar } from './components'

import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Box } from '@mui/material'

const App = () => {
  const { theme, drawerWidth } = useStateContext()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <Navbar />

          <Box
            component="nav"
            sx={{ width: { sm: `${drawerWidth}px` }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            
          </Box>

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

        </Box>
      </ThemeProvider>
    </>
  )
}

export default App