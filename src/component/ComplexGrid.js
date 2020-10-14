import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CenterFocusStrong } from '@material-ui/icons';

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
    margin: 'auto',
    maxWidth: 'auto',
    height : 200,
    backgroundColor: 'green',
    marginTop: theme.spacing(1),
  },
  imageMeetup: {
    width: 200,
    height: 200,
  },
  imgMeetup: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  rootNextMeetup: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
  },

  //Next Mettup
  paperNextMeetup: {
    padding: theme.spacing(5),
    marginRight: 100,
    marginLeft: 100,
    height: 300,
    backgroundColor: 'gray',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(7),
  },
  imageNextMeetup: {
    width: 128,
    height: 128,
  },
  imgNextMeetup: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  //About Mettup
  paperAboutMeetup: {
    padding: theme.spacing(5),
    marginRight: 100,
    marginLeft: 100,
    height: 300,
    backgroundColor: 'white',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(7),
  },
  imageAboutMeetup: {
    width: 128,
    height: 128,
  },
  imgAboutMeetup: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

  //Members
  paperMembers: {
    padding: theme.spacing(5),
    marginRight: 100,
    marginLeft: 100,
    height: 300,
    backgroundColor: 'gray',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(7),
  },
  imageMembers: {
    width: 128,
    height: 128,
  },
  imgMembers: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paperMeetup}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.imageMeetup}>
              <img className={classes.imgMeetup} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={3}>
              <Grid item xs >
                <Typography gutterBottom variant="h6">
                  Haktiv8 Meetup
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Location
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Members
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Organizer
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paperNextMeetup}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paperAboutMeetup}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.imageAboutMeetup}>
              <img className={classes.imgAboutMeetup} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.paperMembers}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.imageMembers}>
              <img className={classes.imgMembers} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}