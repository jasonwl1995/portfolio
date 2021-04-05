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

function Experience() {
    const classes = useStyles();
  
  return (
    <main>
    <Box align="center" >
    <Box width="25%" border={2} borderRadius={16} className="profileCard">

      <Typography variant="h6">
        <Box lineHeight={2} fontWeight="fontWeightBold">
          Education and Experience:
        </Box>
      </Typography>
      
      <Box>
      <Typography variant="h6">
        <Box align="center" lineHeight={1}>
          University of Minnesota: TC
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          2015-2019
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          Bachelor of Statistcs.
        </Box>
        <Box align="center" lineHeight={1}>
          Courses: Calculus 1-4, Combinatorics, C++ using Rstudio and Geany
        </Box>
      </Typography>
      </Box>

      <br></br>

      <Box>
      <Typography variant="h6">
        <Box align="center" lineHeight={1}>
          Prime Academy:
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          2020-2021
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          HTML, CSS, Javascript, React, Redux, Node, Express, PostgresSQL, Material-UI, AWS S3, Python
        </Box>
      </Typography>
      </Box>

      <br></br>

    <Box>
      <Typography variant="h6">
        <Box align="center" lineHeight={1}>
          Fedex May - September 2016:
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          Package Sorting & Handling
        </Box>
      </Typography>
    </Box>

      <br></br> 
      
      <Box>
      <Typography variant="h6">
        <Box align="center" lineHeight={1}>
          Valley Fair Summer 2012-2013:
        </Box>
      </Typography>
      <Typography variant="body1">
        <Box align="center" lineHeight={1}>
          Food Service Team Lead
        </Box>
      </Typography>
      </Box>
    
      <br></br>

    </Box>
    </Box>
    </main>
  );
}

export default Experience;