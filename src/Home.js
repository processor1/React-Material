import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from './components/TopMenu';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function Home() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <TopMenu />
        <SideMenu />
        <MainContent />
        <Footer />
      </div>
    );
  }
  
  export default Home;