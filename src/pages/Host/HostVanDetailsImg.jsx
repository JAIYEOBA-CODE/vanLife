import React from 'react'
import { Box, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';


const HostVanDetailsImg = () => {
    const { data } = useOutletContext();
    return (
        <div>
            <Box sx={{ mb: 2 }}>
                <Box component="img" src={data.imageUrl} alt={data.name} sx={{ width: '40%', borderRadius: 2, height: 'auto', objectFit: 'cover' }} />
            </Box>
        </div>

    )
}

export default HostVanDetailsImg