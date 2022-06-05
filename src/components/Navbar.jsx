import React from 'react'
import { useStateContext } from '../context/StateContext';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const { drawerWidth } = useStateContext()
    return (
    <>
        <AppBar 
            position='fixed' 
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant='h5' noWrap component='div'>
                    N<Box component='span' sx={{ display: { xs: 'none', sm: 'inline-block' } }}>etvids</Box>
                </Typography>
                <Box flexGrow={1} />
                <Button
                    color='inherit'
                >
                    Entrar
                </Button>
            </Toolbar>
        </AppBar>
    </>
    )
}

export default Navbar