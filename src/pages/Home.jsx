import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box
            sx={{
                p: 2,
                width: '100%',
                height: '90vh',
                backgroundImage: 'url(1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                color: 'white',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }
            }}
        >
            <Typography
                variant="h1"
                component="div"

                sx={{ position: 'relative', zIndex: 2, color: 'white', fontWeight: 'bold', mt: 8 }}
            >You got the travel plans, we got the travel vans.
            </Typography>
            <Typography
                variant="h5"
                component="div"

                sx={{ position: 'relative', zIndex: 2, color: 'white', mt: 2 }}
            >
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
            </Typography>
            <Button variant="contained" component={Link} to="/vans" sx={{
                position: 'relative', zIndex: 2, mt: 4, color: 'white',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', width: { xs: '100%', sm: 'auto' }
            }}>Explore our vans</Button>
        </Box>
    )
}

export default Home