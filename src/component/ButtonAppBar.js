import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    marginRight: theme.spacing(5),
  },
  loginButton: {
      flexGrow: 0,
    //   marginLeft: theme.spacing(40),
    position: 'absolute',
                            right:5
      
  }
}));

export function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QTemu
          </Typography>
          <Typography variant="h7" className={classes.title}>
            Create Meetup
          </Typography>
          <Typography variant="h7" className={classes.title}>
            Explore
          </Typography>
          <Button color="inherit" className={classes.loginButton}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}