import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SpaIcon from '@mui/icons-material/Spa';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1976d2' }}>
                    <Link to="/" style={{ display: 'flex', textDecoration: 'none', color: 'inherit', gap: '2px' }}>
                        <SpaIcon />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            VanLife
                        </Typography>
                    </Link>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/about">About</Button>
                        <Button color="inherit" component={Link} to="/vans">Vans</Button>
                        <Button color="inherit" component={Link} to="/host">Host</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;