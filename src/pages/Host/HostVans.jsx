import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const HostVans = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['hostVans'],
        queryFn: () => axios.get('/api/host/vans'),
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading vans</div>;

    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={'bold'}>
                My Vans List
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {data?.data?.vans?.map((van) => (
                    <Link to={`/host/vans/${van.id}`} style={{ textDecoration: 'none' }} key={van.id}>
                        <Box key={van.id} sx={{ width: 300 }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={van.imageUrl}
                                    alt={van.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {van.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ${van.price} / day
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={Link} to={`/host/vans/${van.id}`}>
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Link>
                ))}
            </Box>
        </div>
    )
}
export default HostVans