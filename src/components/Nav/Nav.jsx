import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function Nav() {

  return (
    <div className="nav">

      <Link className="navLink" to="/home">
        Portfolio
      </Link>

      <Link className="navLink" to="/links">
        Links
      </Link>
      
      <Box className="nav-title" align="center" fontWeight="fontWeightBold" >
        Jason Lin Fullstack Engineer
      </Box>
    </div>
  );
}

export default Nav;
