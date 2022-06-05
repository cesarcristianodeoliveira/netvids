import React from 'react'
import { useStateContext } from '../context/StateContext'
import { Box } from '@mui/material'
import { Main, Row } from '../components'
import requests from '../Requests'

const Home = () => {
    const { drawerWidth } = useStateContext()
    return (
    <>
        <Box
            component="main"
            sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Main />
            <Row title='Em alta' poster={true} fetchURL={requests.requestPopular} />
            <Row title='Mais votados' fetchURL={requests.requestTopRated} />
            <Row title='Tendências' fetchURL={requests.requestTrending} />
            <Row title='Terror' fetchURL={requests.requestHorror} />
            <Row title='Em breve' fetchURL={requests.requestUpcoming} />
        </Box>    
    </>
    )
}

export default Home