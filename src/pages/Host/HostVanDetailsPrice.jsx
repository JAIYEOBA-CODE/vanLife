import React from 'react'
import { Box, Typography } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
const HostVanDetailsPrice = () => {
    const { data } = useOutletContext();
    return (
        <Box sx={{ mb: 2 }}>

            <Typography variant="body1" color="initial" sx={{ textAlign: 'justify', letterSpacing: '1px' }}>
                The price for renting the {data.name} is $ {data.price} per day. Please contact us for more details on discounts for longer rentals and any additional fees that may apply.
            </Typography>
        </Box >

    )
}

export default HostVanDetailsPrice 