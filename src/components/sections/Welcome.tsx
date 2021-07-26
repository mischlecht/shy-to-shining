import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  welcome: {
    height: '20rem',
    padding: '1rem',
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Welcome = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.welcome}>
      <Typography variant="h4">Welcome to Shy To Shining</Typography>
    </Grid>
  );
};

export default Welcome;
