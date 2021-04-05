/* Import Libraries */
import React from 'react';

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

function Contact() {
    const classes = useStyles();
  
  return (
    <main>
    <Box align="center" >
    <Box width="25%" border={2} borderRadius={16} className="profileCard">

      <Typography variant="h4">
        <Box lineHeight={2} fontWeight="fontWeightBold">
          Contact Information:
        </Box>
      </Typography>
      
      <Typography variant="body1">
        <Box align="center" lineHeight={2}>
          Gmail: jasonxxx1995@gmail.com
        </Box>
      </Typography>

      <Typography variant="body1">
        <Box align="center" lineHeight={2}>
          E-mail: jasonwl_1995@yahoo.com
        </Box>
      </Typography>

      <br></br>

      {/* <Typography variant="body1">
        <Box align="center" lineHeight={2}>
          Cell Number: 952-297-5849
        </Box>
      </Typography> */}


    </Box>
    </Box>
    </main>
  );
}

export default Contact;