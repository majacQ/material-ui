import * as React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
}));

function BreakpointDown(props: WithWidth) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" component="div">
        Current width: {width}
      </Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  );
}

export default withWidth()(BreakpointDown);
