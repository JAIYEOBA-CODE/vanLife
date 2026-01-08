import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { NavLink, useLocation } from 'react-router-dom';

const HostVanDetailsLayout = () => {
    const location = useLocation();
    const tabs = [
        { label: "Description", path: "description" },
        { label: "Price", path: "price" },
        { label: "Image", path: "image" }
    ];
    const currentTab = location.pathname.split('/').pop();
    return (
        <Box sx={{ p: 4 }}>
            <Tabs value={currentTab}>
                {tabs.map((tab) => (
                    <Tab
                        key={tab.path}
                        label={tab.label}
                        component={NavLink}
                        to={tab.path}
                    />
                ))}
            </Tabs>

        </Box>
    )
}

export default HostVanDetailsLayout