/* Import Libraries */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

// Import Compnents
import Profile from '../Profile/Profile';
import Links from '../Links/Links';
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects';

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
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function Home() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  return (
    <main>

      {/* <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}> */}
        <Grid container className={classes.root} spacing={2}>
        <Grid xs={12}>
        <Profile/>

        <Experience/>
        </Grid>
        </Grid>
        <Projects/>

        <Contact/>

          {/* </Grid>
        </Grid>
      </Grid> */}
    </main>
  );
}

export default Home;
