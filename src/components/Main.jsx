import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Requests'

import { Box, Grid, Typography, Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Main = () => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular)
        .then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    // console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <>
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: 'grey.800',
                    color: '#fff',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                    height: '100vh'
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50%, rgba(18, 18, 18, 1) 100%)'
                    }}
                />
                    <Grid container sx={{ position: 'absolute', bottom: 0 }}>
                        <Grid item md={6}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    p: 3,
                                    pr: { md: 0 },
                                    textAlign: { xs: 'center', sm: 'left' }
                                }}
                            >
                                <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                                    {movie?.title}
                                </Typography>
                                <Typography>{movie?.release}</Typography>
                                <Typography variant="h6" color="inherit" paragraph lineHeight={1.2}>
                                    {truncateString(movie?.overview, 150)}
                                </Typography>
                                <Button color='inherit' variant='outlined' startIcon={<PlayArrowIcon sx={{ width: 32, height: 32 }} />}>
                                    Assistir
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
            </Box>
        </>
    )
}

export default Main