import React from 'react';

import img from './github.png'
import img2 from './linkedin.png'
import img3 from './resume.png'
// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
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
    maxWidth: '25px',
    maxHeight: '25px',
  },
  img1: {
    maxWidth: '45px',
    maxHeight: '45px',
  },
}));

function Links() {
  const classes = useStyles();
  return (
    <main>
    <Box align="center" >
    <Box className="logCard" border={1}>

      <Typography variant="h5">
        <Box lineHeight={2} fontWeight="fontWeightBold">
          Welcome, these are the links of some more resources about me and my projects!
        </Box>
      </Typography>

    
      <Typography variant="body1">
        <Box align="left" margin="10px" lineHeight={1} className={classes.root}>

          <img src={img} className={classes.img}/>
  
          <Link href="https://github.com/jasonwl1995" color="red">
            View some of my projects on GitHub!
          </Link>
        </Box>
      </Typography>

      <Typography variant="body1">
        <Box align="left" margin="10px" lineHeight={1} className={classes.root}>
          <img src={img2} className={classes.img} />
          <Link href="https://www.linkedin.com/in/jason-lin-857247205/" color="red">
            Check me out on LinkedIn!
          </Link>
        </Box>
      </Typography>

    
      <Typography variant="body1">
        <Box align="left" margin="10px" lineHeight={1} className={classes.root}>
          <img src={img3} className={classes.img1} />
          <Link href="https://www.linkedin.com/in/jason-lin-857247205/" color="red">
            Take a look at my Resume!
          </Link>
        </Box>
      </Typography>


    </Box>
    </Box>
    </main>
  );
}

export default Links;
