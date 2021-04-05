/* Import Libraries */
import React from 'react';
import img from './Jason.jpeg'
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  img: {
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));

function Profile() {
    const classes = useStyles();
  
  return (
    <main>
    <Box align="center" >
    <Box width="25%" border={2} borderRadius={16} className="profileCard">

      <Box align="center">
      <br></br>
        <img src={img} className={classes.img}/>
      </Box>

      <Typography variant="h4">
        <Box lineHeight={2} fontWeight="fontWeightBold">
          Jason Lin
        </Box>
      </Typography>

      <Typography variant="h6">
        <Box align="center" lineHeight={1.5} fontWeight="fontWeightBold">
          About: 
        </Box>
      </Typography>
      
      <Typography variant="body1">
        <Box align="center" lineHeight={1.5}>
          Hi, My name is Jason! I am from Shakopee Minnesota and I am a Fullstack Developer. Looking to work and develope my skills through new jobs excited for new opportunities to learn even more!
        </Box>
      </Typography>
    
    <br></br>
    </Box>
    </Box>
    </main>
  );
}

export default Profile;