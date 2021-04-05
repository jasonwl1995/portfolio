import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Import Default components
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Links from '../Links/Links';
import Home from '../Home/Home';
import './App.css';

// MATERIAL-UI IMPORTS
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const appTheme = createMuiTheme({
  palette: {
    background: {
      default: "#212121",
    }
  }
});


function App() {

  return(
  <ThemeProvider theme={appTheme}>
  <CssBaseline />
  <Router>
    <div>
      <Nav />
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route exact path="/links">
          <Links />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

      </Switch>
      <Footer />
    </div>
  </Router>
  </ThemeProvider>
  )
};

export default App;