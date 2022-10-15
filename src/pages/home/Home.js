/**
 * DESIGN NOTES
 * content:
 * main stuff
 *  1. welocme message
 *  1.1 quick descriptior of what this website is
 *  1.2 why you should create an account, ie make an account and gain access to scholorship search tools and recommendations or 
 *      just view scholorships 
 *  2. info for if your new and need an account
 *  3. a way to quickly login if ur alraedy a user 
 *  4. a way to navigate to other landing pages
 *  5. footer with basic info on if you have an issue, contact the devs
 *     socials, links to pages again, copywrite, app version, made by ...
 * minor stuff
 *  6. info on where to go if you want to add a scholarship 
 *  7. navigation icons or boxes, etc. to go to other pages ie view scholoarships,
 *     about page, issue submit, 
 */

/**
 * THINGS TO MAKE
 * Get fonts for main welcom message, secondary info/welcome/statment
 * get font for SCHOLIES.com
 * 
 * place these text
 * 
 * make sticky nav bar, with hamburger
 * 
 * have the tips of the 3 items 
 * figure out how to do scroll snapping
 */

import React from "react";
import { useState } from 'react';
import LandingNavBar from "../../components/LandingNavBar";

function Home(){
    
    
    return(
        <div>
            <LandingNavBar />
        </div>
    )
}

export default Home