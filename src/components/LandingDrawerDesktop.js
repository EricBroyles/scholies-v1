import React from "react";
import { useState } from 'react';
//React Router Imports
import {Link,} from 'react-router-dom'
//MUI Imports

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';

//MUI Icons Imports
import MenuIcon from '@mui/icons-material/Menu';


/**
 * DESIGN NOTES: 
 * add a max width to the drawer
 * give it a color not white
 * place cards inside it instead of just a list
 */
function LandingDrawerDesktop(){
    
    const [open, setOpen] = useState(false);

      

    return(
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <h1>Hello this is a drawer for the desktop</h1>
      </SwipeableDrawer>
    </div>
    )
}

export default LandingDrawerDesktop