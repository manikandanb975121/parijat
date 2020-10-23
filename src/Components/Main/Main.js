import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ControlledCarousel from '../Features/Features';
import News from '../News/News';
import IdeaBox from '../Ideabox/Ideabox';
import Photo from '../PhotoGallery/Photo';
import Calendar from '../Calendar/Calendar';
import Video from '../Video/Video';
import Starperformer from '../Starperformer/StarPer'
import CSR from '../CSR/CSRStory';
import Sandarbh from '../Sandarbh/Sandarbh';
import Mission from '../Mission/Mission';
import Facebook from '../Facebook/Facebook';
import Documents from '../Docuements/Documents';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      
        <Grid item xs={9} >
          
          <ControlledCarousel />
        </Grid>
        <Grid item xs={3}>
        
          <News />
        </Grid>
        {/* <Grid item xs={3}>
         
          <IdeaBox />
        </Grid> */}
      </Grid>
      {/* <hr className="mt-3" /> */}


      <Grid className="mt-3" container spacing={2}>

      <Grid item xd={3}>
          <CSR />
        </Grid>

        <Grid item xs={3}>
         
          <IdeaBox />
        </Grid>

        {/* <Grid item xs={3} >
          <Photo />
        </Grid> */}

        <Grid item xs={6} >
          <Video />
        </Grid>

        {/* <Grid item xs={3} >
          <Calendar />
        </Grid> */}

        
        
      </Grid>

      {/* <hr className="mt-3" /> */}


      <Grid className="mt-3" container spacing={2}>

        {/* <Grid item xd={3}>
          <CSR />
        </Grid> */}

        <Grid item xs={4}>
          <Facebook />
        </Grid>
    
        <Grid item xs={4}>
          <Sandarbh />
        </Grid>

        <Grid item xs={4}>
        <Mission />
        </Grid>

        <Grid item xs={4}>
        <Documents />
        </Grid>
        {/* <Grid item xs={4} >
          <Calendar />
        </Grid>

        <Grid item xs={4}>
          <Starperformer />
        </Grid>

        <Grid item xs={4} >
          <Photo />
        </Grid> */}
        

        </Grid>

        {/* <hr className="mt-4" /> */}
      <Grid className="mt-4" container spacing={2}>

      <Grid item xs={6} >
          <Photo />
        </Grid> 

         <Grid item xs={3} >
          <Calendar />
        </Grid>

        <Grid item xs={3}>
          <Starperformer />
        </Grid>

        

      </Grid>

      {/* <Grid className="mt-5" container spacing={2}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid> */}
    </div>
  );
}
