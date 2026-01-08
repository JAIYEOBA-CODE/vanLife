import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const VanDetails = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['van-details'],
        queryFn: () => axios.get(`/api/vans/${id}`).then(res => res.data.van)
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading van details</div>;

    console.log(data);
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
                {data.name}
            </Typography>
            <img
                src={data.imageUrl}
                alt={data.name}
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
            />
            <Box sx={{ display: 'flex', gap: '10px', mb: 2, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom>
                    Price: <b> ${data.price}</b>/day
                </Typography>
                <Button variant="contained" sx={{
                    mt: 2, mb: 2, color: 'white',
                    background: `${data.type}` === 'Rugged' ? 'linear-gradient(45deg, #FF8C38 30%, #FFA500 90%)' : `${data.type}` === 'Luxury' ? 'linear-gradient(45deg, #4CAF50 30%, #8BC34A 90%)' : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
                }}>{data.type}</Button>
            </Box>
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', letterSpacing: '1px' }}>
                {data.description}
            </Typography>
            <Button variant="contained" component={Link} to="/vans" sx={{
                mt: 4, color: 'white',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            }}>Back to all vans</Button>
            <Button variant="contained" component={Link} to="/checkout" sx={{
                mt: 4, ml: 2, color: 'white',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
            }}>Rent this van</Button>
        </Box>

    )
}

export default VanDetails