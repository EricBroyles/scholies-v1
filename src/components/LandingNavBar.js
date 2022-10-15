/**
 * DESIGN NOTES
 *  sticky
 *  left right gradient, of a dark grey with a decent opacity
 *  hamber to the left, opens a side bar or a discord like icon bar if mobile
 *  explore scholoarhips centered
 *  login (green ish)
 *  register button (orange ish)
 */

 import React from "react";
 import {Link} from 'react-router-dom'
 import { useState } from 'react';

import '../assests/LandingNavBar.css'
import LandingDrawerDesktop from "./LandingDrawerDesktop";
import LandingDrawerMobile from "./LandingDrawerMobile";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';


 
 function LandingNavBar(){
    
     
    return(
    <div>
    <Box sx={{flexGrow: 1, mb: '60px'}}>
        <AppBar sx={{backgroundColor: 'rgba(255, 255, 255, .08)'}}>
            <Toolbar>
            <div id="landing-drawer-desktop">
                <LandingDrawerDesktop/>
            </div>
            <div id="landing-drawer-mobile">
                <LandingDrawerMobile/>
            </div>
            {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            
                <Typography  
                    variant="h6" 
                    component="div" 
                    sx={{ flexGrow: 1 }}
                >
                    <Link 
                        className="header" 
                        to="/" 
                        style={{textDecoration: 'none'}} 
                    >
                        SCHOLIES.com
                    </Link>
                </Typography>
     
            <div id="nav-explore-link">
                <Button 
                    color="inherit" 
                    variant="text" 
                    startIcon={<ExploreIcon size="large" color="inherit" edge="start" />} 
                    component={Link} to="/explore"
                >
                    Scholarships
                </Button>
            </div>
            <Button component={Link} to="/login">Login</Button>
            <Button variant="outlined" component={Link} to="/register">Register</Button>
            </Toolbar>
        </AppBar>
    </Box>
    </div>
    )
 }
 
 export default LandingNavBar