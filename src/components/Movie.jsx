import React, { useState } from 'react'
import { Card, CardMedia, Box, CardActions, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Movie = ({ item, poster }) => {
  const [like, setLike] = useState(false)
  return (
    <>
      <Card 
        sx={{ 
          display: 'inline-block',
          width: poster ? { xs: 'auto' } : { xs: '160px', sm: '200px', md: '240px', lg: '280px' },
          position: 'relative',
          mr: 1,
          '&:last-child': {
            mr: 0,
          },
        }}
        elevation={0}
      >
        <CardMedia
          component='img'
          height={poster ? 300 : 200}
          image={`${poster ? `https://image.tmdb.org/t/p/w500/${item?.poster_path}` : `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}`}
          alt={item.title}
        />
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
        <CardActions disableSpacing sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'absolute', bottom: 0 }}>
          <IconButton color='inherit'>
            <PlayArrowIcon />
          </IconButton>
          {like ? (
            <IconButton color='inherit' onClick={() => setLike(false)}>
              <FavoriteIcon />
            </IconButton>
          ) : (
            <IconButton color='inherit' onClick={() => setLike(true)}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </>
  )
}

export default Movie