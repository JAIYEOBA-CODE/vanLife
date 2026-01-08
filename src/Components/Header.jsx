import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SpaIcon from "@mui/icons-material/Spa";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeLinkStyle = {
        textDecoration: "overline",
        fontWeight: "bold",
        textDecorationColor: "yellow",

    };

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background:
                        "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                }}
            >
                <NavLink
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        textDecoration: "none",
                        color: "inherit",

                    }}
                    end
                >
                    <SpaIcon />
                    <Typography variant="h6">VanLife</Typography>
                </NavLink>


                <Box sx={{ display: "flex", gap: "10px" }}>
                    {["/", "/about", "/vans", "/host"].map((path, index) => {
                        const labels = ["Home", "About", "Vans", "Host"];

                        return (
                            <Button
                                key={path}
                                color="inherit"
                                component={NavLink}
                                to={path}
                                style={({ isActive }) =>
                                    isActive ? activeLinkStyle : undefined
                                }
                            >
                                {labels[index]}
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
