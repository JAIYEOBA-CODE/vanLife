import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link, useParams, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowBack } from '@mui/icons-material';
import HostVanDetailsLayout from '../../Components/HostVanDetailsLayout';


const HostVanDetails = () => {
    const { id } = useParams();
    const fetcher = async () => {
        const response = await axios.get(`/api/host/vans/${id}`);
        // console.log(response.data.vans[0]);
        return response.data.vans[0];
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: ['hostVanDetails'],
        queryFn: fetcher,
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading van details</div>;


    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="body1" color="initial" sx={{ my: 3 }}>
                <Link to=".." relative='path' style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ArrowBack fontSize="small" />
                    Back to all vans
                </Link>
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                <Card sx={{ display: "flex", width: "100%" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, height: 200, objectFit: "cover" }}
                        image={data?.imageUrl}
                        alt={data?.name}
                    />
                    <Box >

                        <CardContent>
                            <Button
                                variant="contained"

                                sx={{ mb: 2, backgroundColor: `${data?.type}` === 'Rugged' ? '#FF8C38' : `${data?.type}` === 'Luxury' ? '#4CAF50' : '#2196F3' }}
                            >
                                {data?.type}
                            </Button>
                            <Typography gutterBottom variant="h5" component="h2">
                                {data?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${data?.price} / day
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/host/vans/${id}/edit`}>
                                Edit
                            </Button>
                        </CardActions>
                    </Box>
                </Card>
            </Box>
            <HostVanDetailsLayout />
            <Outlet context={{ data }} />
        </Box>
    )
}

export default HostVanDetails