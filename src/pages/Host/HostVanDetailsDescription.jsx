import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';




export const HostVanDetailsDescription = () => {
    const { data } = useOutletContext();
    return (
        <div>
            <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6" color="initial">Name: </Typography>
                    <Typography variant="body1" color="initial" sx={{ ml: 1 }}>{data.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="h6" color="initial">Category: </Typography>
                    <Typography variant="body1" color="initial" sx={{ ml: 1 }}>{data.type}</Typography></Box>
                <Typography variant="h6" color="initial" sx={{ mb: 1 }}>
                    Description
                </Typography>
                <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2 }}>
                    <Typography variant="body1" color="initial" sx={{ textAlign: 'justify', letterSpacing: '1px' }}>
                        {data.description}
                    </Typography>
                </Box>
                <Typography variant="h6" color="initial">
                    Price: $ {data.price} / day
                </Typography>

            </Box>

        </div >
    )
}
