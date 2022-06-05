import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Typography, Box } from '@mui/material'
import { Movie } from './'

const Row = ({ title, fetchURL, poster }) => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(fetchURL)
        .then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    // console.log(movies)
    return (
    <>
        <Box sx={{ px: 1 }}>
            <Typography variant='h6' color='text.secondary' gutterBottom>{title}</Typography>
        </Box>
        {movies.map((item, id) => (
            <Movie key={id} item={item} poster={poster} />
        ))}
    </>
    )
}

export default Row