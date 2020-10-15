import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CenterFocusStrong } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },

  //haktiv8 meetup
  paperMeetup: {
    alignItems: CenterFocusStrong,
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    marginTop: theme.spacing(2),
  },
  imageMeetup: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },

  rootNextMeetup: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },

  //Next Mettup
  paperNextMeetup: {
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    marginTop: theme.spacing(1),
  },

  //About Mettup
  paperAboutMeetup: {
    padding: theme.spacing(5),
    marginRight: 100,
    marginLeft: 100,
    height: 300,
    backgroundColor: 'white',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(7),
  },

  //Members
  paperMembers: {
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    marginTop: theme.spacing(1),
  },
  imgMembers: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  //Past Meetups
  paperPastMettups: {
    padding: theme.spacing(2),
    backgroundColor: 'gray',
    marginTop: theme.spacing(1),
  },
}));

export function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
      <Paper className={classes.paperMeetup}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <ButtonBase className={classes.imageMeetup}>
            <Avatar src="/src/image/img_avatar_suit.png" className={classes.imageMeetup} variant="square"></Avatar>
            </ButtonBase>
          </Grid>
          
              <Grid item xs >
              <Box fontWeight="fontWeightBold" m={2}>
                    Hacktiv8 Meetup
                  </Box>
                  <Box m={2}>
                    Location : Jakarta, Indonesia
                  </Box>
                  <Box m={2}>
                    Members : 1,078
                  </Box>
                  <Box m={2}>
                    Organizers : Adhy Wiranata
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">Login</Button>
                  </Box>
              </Grid>
            
        </Grid>
      </Paper>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h2>Next Meetup</h2>
          </Box>
        </Grid>
      </Grid>      

      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          <Paper className={classes.paperNextMeetup}>
        <Box m={1}>
             <p><b>Awesome meetup and event</b><br></br></p>
              <p>25 January 2019</p>
            </Box>
            <Box m={1}>
              Hello, JavaScript & Node.js Ninjas!
              Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!
              The meetup format will contain some short stories and technical talks.
              If you have a short announcement you'd like to share with the audience, yoou may do so during open mic announcements.
            </Box>
            <Box m={1}>
              <p>Remember to bring a photo ID to get through building security.</p>
            </Box>
            <Box m={1}>
              <p>-------</p>
            </Box>
            <Box m={1}>
              <p>See you there!</p>
            </Box>
            <Box m={1}>
              <p>Best, Hengki, Govanni, Sofian, Riza, Agung The JakartaJS Organizers</p>
            </Box>
      </Paper>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h2>About Meetup</h2>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={10}>
          <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.</p>
          <p>Twitter : @JakartaJS and we use the hashtag #jakartajs</p>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h2>Members</h2>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
      <Paper className={classes.paperMembers}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar src="/src/image/img_avatar_suit.png" className={classes.imgMembers}></Avatar>
              </Grid>
              <Grid item xs={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>Organizer</b>
                  </Box>
                  <Box m={1}>
                    Organizers : Adhy Wiranata
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={2}>
                <Box m={5}>
                  4 others.
                </Box>
              </Grid>
            </Grid>
      </Paper>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h2>Past Meetups</h2>
          </Box>
        </Grid>
      </Grid> 

      <Grid justify="center" container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paperPastMettups}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    <b>27 November 2017</b>
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    <b>38 JakartaJS April Meetup with</b><br></br>
                    <b>Blibli</b>
                  </Box>
                  <Box m={2}>
                    <b>113</b> went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperPastMettups}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    <b>27 October 2017</b>
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    <b>37 JakartaJS April Meetup with</b><br></br>
                    <b>Hacktiv8</b>
                  </Box>
                  <Box m={2}>
                    <b>110</b> went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperPastMettups}>
            <Grid container wrap="nowrap" spacing={2}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={2}>
                    <b>27 September 2017</b>
                  </Box>
                  <Divider className={classes.divider} />
                  <Box m={2}>
                    <b>39 JakartaJS April Meetup with</b> <br></br>
                    <b>kumparan</b>
                  </Box>
                  <Box m={2}>
                    <b>139</b> went
                  </Box>
                  <Box m={2}>
                    <Button variant="contained" color="primary">View</Button>
                  </Box>
                </Typography> 
            </Grid>
          </Paper>
        </Grid>
      </Grid><br></br><br></br>
      <Grid justify="center" container spacing={3}>
        <Grid item xs={10}>
          <Box fontWeight="fontWeightBold" m={1}>
            <Divider className={classes.divider} />
          </Box>
        </Grid>
      </Grid><br></br>
      <Grid justify="center" container spacing={3}>
        <Typography fontWeight="fontWeightBold">
          <Box m={2}>
            <b>Copyright Hacktiv8 2018</b>
          </Box>
        </Typography> 
      </Grid>       
    </div>
  );
}