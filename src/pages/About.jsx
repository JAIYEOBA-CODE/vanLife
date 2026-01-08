import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const About = () => {
    return (
        <Grid
            container
            sx={{
                mx: 'auto',
                p: { xs: 2, sm: 3, md: 4 },
                maxWidth: '1200px',
                alignItems: 'center',
                gap: { xs: 2, md: 4 }
            }}
        >
            <Grid item xs={12} lg={6}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        mb: 2
                    }}
                    src="180508141319-03-amazing-places-africa-victoria-falls.jpg"
                    alt="VanLife"
                />
            </Grid>
            <Grid item xs={12} lg={6}>
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
                    Don't squeeze life into a van, make a van your life.
                </Typography>

                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                    Our mission is to envourage adventurers to explore the world in a van built for them. We offer a wide range of vans to meet your needs, whether you're looking for a cozy camper for two or a spacious van for the whole family. Our vans are equipped with all the essentials to make your road trip comfortable and memorable.
                </Typography>
                <Typography variant="body1" color="initial"> Our Team is full of passionate individuals dedicated to making your van life dreams a reality. </Typography>

                <Box sx={{ backgroundColor: '#ffb4c4ff ', borderRadius: '8px', p: 4, mt: 2 }}>
                    <Typography variant="h5" color="initial">Your Destination is  waiting. <br /> Your Van is ready</Typography>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/vans"
                        sx={{
                            color: 'white',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            width: { xs: '100%', sm: 'auto' },
                            mt: 4
                        }}
                    >
                        Explore our vans
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default About