
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HostLayout = () => {
    const tabList = ['Dashboard', 'Income', 'Reviews', 'Vans'];
    const [value, setValue] = useState(tabList[0].toLowerCase());

    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`${newValue === 'dashboard' ? '/host' : newValue}`);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="host layout tabs"
                >
                    {tabList.map((tab, index) => (
                        <Tab
                            co
                            key={index}
                            value={tab.toLowerCase()}
                            label={tab}
                        />
                    ))}
                </Tabs>
            </Box>
            <Outlet />
        </>
    );
}

export default HostLayout