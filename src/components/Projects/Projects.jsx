/* Import Libraries */
import React from 'react';
import img from './artgalore.jpeg'
import img1 from './artgalore2.jpeg'
import img2 from './movies.jpeg'

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';
import Link from '@material-ui/core/Link';

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
    maxWidth: '95%',
    maxHeight: '95%',
  },
}));

function Projects() {
    const classes = useStyles();
  
  return (
    <div>
      <main>
      <Box align="center">
      <Box width="100%" border={1} borderRadius={16} className="profileCard">
            <br></br>
        <Typography variant="h3">
          <Box align="center" lineHeight={1} fontWeight="fontWeightBold">
            Projects
          </Box>
        </Typography>

        <Typography variant="h5">
          <Box align="center" lineHeight={3} fontWeight="fontWeightBold">
            Take a look at some of the project I have created so far!
          </Box>
        </Typography>
      </Box>
      </Box>

        <Box align="center" >
          <Box width="60%" border={2} borderRadius={16} className="projectCard">

        <Typography variant="h5">
          <Box align="center" lineHeight={2} fontWeight="fontWeightBold">
            Art Galore
          </Box>
        </Typography>

            <Box align="center">
              <img src={img} className={classes.img}/>
            </Box>

            <Box align="center">
            <br></br>
              <img src={img1} className={classes.img}/>
            </Box>

            <Typography variant="h6">
              <Box align="center" lineHeight={1.5} fontWeight="fontWeightBold">
                About: 
              </Box>
            </Typography>
            
            <Typography variant="body1">
              <Box align="center" lineHeight={1.5}>
                Art galore is an online artwork sharing app! Take a look at the app and test its features by clicking on
                <br></br>
                <Link href="https://art-galore.herokuapp.com/" color="red">
                  Heroku!
                </Link>
                <br></br>
                Or take a look at it on 
                <br></br>
                <Link href="https://github.com/jasonwl1995/art-galore-solo" color="red">
                Github!
                </Link>
              </Box>
            </Typography>
          

          </Box>
        </Box>
      </main>

      <main>
        <Box align="center" >
          <Box width="60%" border={2} borderRadius={16} className="profileCard">

          <Typography variant="h5">
            <Box align="center" lineHeight={2} fontWeight="fontWeightBold">
              Movie Saga
            </Box>
          </Typography>

            <Box align="center">
            <br></br>
              <img src={img2} className={classes.img}/>
            </Box>

            <Typography variant="h6">
              <Box align="center" lineHeight={1.5} fontWeight="fontWeightBold">
                About: 
              </Box>
            </Typography>
            
            <Typography variant="body1">
              <Box align="center" lineHeight={1.5}>
                Movie Saga is an application to keep track of the movies you've watched!
                <br></br>
                Take a look at it on 
                <br></br>
                <Link href="https://github.com/jasonwl1995/WK12-Movie-SAGA" color="red">
                Github!
                </Link>
              </Box>
            </Typography>
          
          </Box>
        </Box>
      </main>
    </div>
  );
}

export default Projects;