import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        <Box sx={{ p: 2, mt: 4, backgroundColor: '#f5f5f5', textAlign: 'center', position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }}>
            <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} VanLife. All rights reserved.
            </Typography>
        </Box>
    )
}

export default Footer