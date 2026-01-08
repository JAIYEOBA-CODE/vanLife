import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';





const Vans = () => {
    const vansFetcher = async () => {
        const response = await axios.get('/api/vans');
        console.log(response);
        return response.data.vans;
    }

    const { data: vans, isLoading } = useQuery({
        queryKey: ['vans'],
        queryFn: vansFetcher
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                Explore our van options
            </Typography>
            <Grid container spacing={4}>
                {vans.map((van) => (
                    <Grid item key={van.id} xs={12} sm={6} md={4}>
                        <Link to={`/vans/${van.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Box
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                    boxShadow: 2,
                                }}

                            >
                                <img
                                    src={van.imageUrl}
                                    alt={van.name}
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h6">{van.name}</Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Price: <b> ${van.price}</b>/day
                                    </Typography>
                                    <Button
                                        variant="contained"

                                        sx={{ mt: 2, backgroundColor: `${van.type}` === 'Rugged' ? '#FF8C38' : `${van.type}` === 'Luxury' ? '#4CAF50' : '#2196F3' }}
                                    >
                                        {van.type}
                                    </Button>
                                </Box>

                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}

export default Vans